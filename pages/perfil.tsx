/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseconfig";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseApp } from "../firebaseconfig";

interface Props {
  docs: Doc[];
}

interface DocData {
  email: string;
  notes: number[];
}

interface Doc {
  id: string;
  notes: number[];
  email: string
}

export const getServerSideProps = async () => {
  const db = getFirestore(firebaseApp);
  const querySnapshot = await getDocs(collection(db, 'users'));
  const docs: Doc[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as DocData;
    docs.push({ ...data, id: doc.id });
  });
  return {
    props: {
      docs,
    },
  };
};

const ProfileTab = ({ docs }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [userNotes, setUserNotes] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    const docWithMatchingEmail: Doc | undefined = docs.find((doc) => doc.email === user?.email);
    if (docWithMatchingEmail) {
      setUserNotes(docWithMatchingEmail.notes)
    }
    return () => unsubscribe();
  }, [docs, user?.email]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!user) {
    router.push('/')
    return <p>No se ha iniciado seción.</p>
  }

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg p-8">
          <img
            src={user.photoURL ? user.photoURL : ""}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full mb-4 mx-auto"
          />
          <h2 className="text-xl text-black font-bold text-center">
            {user.displayName}
          </h2>
          <p className="text-gray-500 text-center">{user.email}</p>
          <hr className="my-4 border-gray-300" />
          <h3 className="text-xl text-black font-bold text-center">Notas:</h3>
          <div>
            {userNotes.map((note, index) => (
              <p key={index} className="text-center text-black">
                <b>Nota unidad {index + 1} </b>:{" "}
                {note === 0 ? "Examen no presentado" : note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileTab;

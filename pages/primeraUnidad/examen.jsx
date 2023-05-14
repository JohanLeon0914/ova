import Layout from '@/components/Layout';
import Quiz from '@/components/QuizPrimeraUnidad';
import React, { useState } from 'react';

export default function Examen() {

  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Quiz />
      </main>
    </Layout>
  );
}
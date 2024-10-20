"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Guess() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validGuesses = ['minzo', 'bashir', 'mohamed bashir'];
    if (validGuesses.includes(guess.toLowerCase())) {
      router.push('/final');
    } else {
      setMessage('Nice try');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Who sent this?</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="bg-muted text-foreground"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Guess
            </Button>
            {message && <p className="text-destructive text-center">{message}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
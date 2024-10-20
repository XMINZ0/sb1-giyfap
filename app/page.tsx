"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.toLowerCase() === 'marwa' && lastName.toLowerCase() === 'mukhtar') {
      router.push('/confession');
    } else {
      setError('Wrong person');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Is this destiny?</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-muted text-foreground"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-muted text-foreground"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Enter
            </Button>
            {error && <p className="text-destructive text-center">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
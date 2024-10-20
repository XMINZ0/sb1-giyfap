"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Confession() {
  const [showNext, setShowNext] = useState(false);
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">A Secret Confession</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground text-lg leading-relaxed">
            In the quiet moments of my day, I find my thoughts drifting to you. There's something about you that ignites a spark in my heart. I've had a crush on you for quite some time, and the feelings I've tried to hide have grown stronger with each passing moment. Your thoughts captivate me like a hopeless prisoner and after long and hard times of pushing them aside, I can't ignore them any longer. Just know that someone out there holds a special admiration for you, even if it's kept in the shadows.
          </p>
          {!showNext && (
            <Button onClick={() => setShowNext(true)} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Next
            </Button>
          )}
          {showNext && (
            <Button onClick={() => router.push('/guess')} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Who sent this?
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
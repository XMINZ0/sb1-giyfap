"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Final() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">There he is waiting for a reply</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            asChild
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=%2B254105050566&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reply on WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
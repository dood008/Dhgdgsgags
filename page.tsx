"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // تنفيذ عملية تسجيل الدخول هنا
  }

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <motion.section 
        className="flex flex-col items-center justify-center p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
        </div>
        <h1 className="text-3xl font-semibold mb-2 text-center">تسجيل الدخول إلى حسابك</h1>
        <p className="text-muted-foreground mb-8 text-center">مرحبًا بعودتك! يرجى إدخال معلوماتك</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">تذكرني</Label>
            </div>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              نسيت كلمة المرور؟
            </Link>
          </div>
          <Button type="submit" className="w-full">تسجيل الدخول</Button>
        </form>
        <p className="mt-8 text-center text-sm">
          ليس لديك حساب؟{' '}
          <Link href="/signup" className="text-primary hover:underline">
            إنشاء حساب
          </Link>
        </p>
      </motion.section>
      <motion.section 
        className="hidden md:flex items-center justify-center bg-muted"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-64 h-64 bg-primary rounded-full flex items-center justify-center">
          <div className="w-48 h-48 bg-background rounded-full flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-foreground rounded-full mb-2"></div>
            <div className="w-16 h-2 bg-foreground rounded-full"></div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';

export const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const isNameValid = name.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;
  const isTermsValid = terms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (isNameValid && isEmailValid && isPasswordValid && isTermsValid) {
      setSuccess(true);
      console.log('Dados do formulário:', { name, email, password, terms });
    }
  };

  return (
    <div className="w-full max-w-[550px] mx-auto py-8">
      {/* Brand Icon */}
      <div className="text-left mb-6">
        <Link href="/" className="inline-block">
          <Image
            src="/assets/imgs/logo-farol-icon.svg"
            alt="Farol"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </Link>
      </div>

      {/* Title & Subtitle */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#263228] font-rethink mb-2 leading-tight">
        Criar conta
      </h1>
      <p className="text-sm sm:text-base text-[#6c757d] font-montserrat mb-8">
        Junte-se ao Farol e ajude a transformar vidas em momentos de emergência
      </p>

      {/* Google OAuth Button */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => alert('Autenticação com Google (Demonstração)')}
          className="w-full bg-white border-2 border-[#e9ecef] hover:border-[#54BF44] hover:bg-[#f8f9fa] text-[#263228] font-montserrat font-medium py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-none hover:shadow-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span>Continuar com Google</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative text-center my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#e9ecef]" />
        </div>
        <span className="relative bg-white px-4 text-sm text-[#6c757d] font-montserrat">
          ou
        </span>
      </div>

      {/* Success Notification */}
      {success ? (
        <div className="p-6 rounded-2xl bg-[#DEF3C6] border border-[#54BF44]/30 text-center mb-6 animate-in fade-in zoom-in duration-300">
          <h3 className="text-xl font-bold text-[#263228] font-rethink mb-2">
            Cadastro realizado com sucesso!
          </h3>
          <p className="text-sm text-[#263228]/80 font-montserrat mb-4">
            Seja bem-vindo ao Farol. Agora você pode acessar todas as funcionalidades da plataforma.
          </p>
          <Button
            asChild
            className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-full px-6 py-2.5 font-semibold font-rethink"
          >
            <Link href="/app">Ir para o Farol</Link>
          </Button>
        </div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-medium font-montserrat text-[#263228]">
              Nome completo
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className={`h-12 rounded-xl border-2 font-montserrat text-base px-4 transition-all ${
                submitted && !isNameValid
                  ? 'border-red-500 focus-visible:ring-red-300'
                  : 'border-[#e9ecef] focus-visible:border-[#54BF44] focus-visible:ring-[#DEF3C6]'
              }`}
            />
            {submitted && !isNameValid && (
              <p className="text-xs text-red-600 font-montserrat mt-1">
                Por favor, insira seu nome completo.
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium font-montserrat text-[#263228]">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className={`h-12 rounded-xl border-2 font-montserrat text-base px-4 transition-all ${
                submitted && !isEmailValid
                  ? 'border-red-500 focus-visible:ring-red-300'
                  : 'border-[#e9ecef] focus-visible:border-[#54BF44] focus-visible:ring-[#DEF3C6]'
              }`}
            />
            {submitted && !isEmailValid && (
              <p className="text-xs text-red-600 font-montserrat mt-1">
                Por favor, insira um e-mail válido.
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm font-medium font-montserrat text-[#263228]">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              className={`h-12 rounded-xl border-2 font-montserrat text-base px-4 transition-all ${
                submitted && !isPasswordValid
                  ? 'border-red-500 focus-visible:ring-red-300'
                  : 'border-[#e9ecef] focus-visible:border-[#54BF44] focus-visible:ring-[#DEF3C6]'
              }`}
            />
            {submitted && !isPasswordValid && (
              <p className="text-xs text-red-600 font-montserrat mt-1">
                A senha deve ter pelo menos 8 caracteres.
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="pt-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={terms}
                onCheckedChange={(checked) => setTerms(Boolean(checked))}
                className="mt-0.5 border-2 border-gray-300 data-[state=checked]:bg-[#54BF44] data-[state=checked]:border-[#54BF44]"
              />
              <Label
                htmlFor="terms"
                className="text-xs sm:text-sm font-normal text-[#6c757d] font-montserrat leading-snug cursor-pointer"
              >
                Concordo com os{' '}
                <a href="#" className="text-[#54BF44] hover:underline font-medium">
                  Termos de Uso
                </a>{' '}
                e{' '}
                <a href="#" className="text-[#54BF44] hover:underline font-medium">
                  Política de Privacidade
                </a>
              </Label>
            </div>
            {submitted && !isTermsValid && (
              <p className="text-xs text-red-600 font-montserrat mt-1 pl-7">
                Você deve concordar com os termos para continuar.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-[#54BF44] hover:bg-[#459A37] text-white font-rethink font-semibold text-base py-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            >
              Criar conta
            </Button>
          </div>

          {/* Login Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-[#6c757d] font-montserrat">
              Já tem uma conta?{' '}
              <Link href="/app" className="text-[#54BF44] font-medium hover:underline">
                Fazer login
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

'use client';

import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Navigation,
  Accessibility,
  Dog,
  Users,
  Clock,
  CheckCircle,
  Copy,
  Check,
  AlertTriangle,
  Heart,
  QrCode,
} from 'lucide-react';
import { SHELTERS } from '@/entities/shelter';
import { VOLUNTEER_OPPORTUNITIES } from '@/entities/volunteer';
import { DONATION_POINTS, URGENT_NEEDS, SUPPORT_CONTACTS, PIX_DATA } from '@/entities/donation';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import { Progress } from '@/shared/ui/progress';

interface ResultsScreenProps {
  actionId: string;
  onBack: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ actionId, onBack }) => {
  const [copiedPix, setCopiedPix] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const [skillsSubmitted, setSkillsSubmitted] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(50);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(PIX_DATA.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const getTitle = () => {
    switch (actionId) {
      case 'find-shelter':
        return 'Abrigos Próximos';
      case 'find-opportunities':
        return 'Oportunidades de Voluntariado';
      case 'register-skills':
        return 'Cadastrar Habilidades';
      case 'nearby-needs':
      case 'urgent-needs':
        return 'Necessidades Mais Urgentes';
      case 'donate-items':
        return 'Pontos de Coleta para Doação';
      case 'donate-money':
        return 'Doação Direta via PIX';
      case 'get-support':
      case 'emergency-contacts':
        return 'Contatos e Serviços de Apoio';
      default:
        return 'Resultados';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 pb-32">
      {/* Results Header */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
        <Button
          variant="outline"
          onClick={onBack}
          className="rounded-full w-10 h-10 p-0 flex items-center justify-center border-gray-200 text-[#263228] hover:bg-gray-100"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <h2 className="text-2xl sm:text-3xl font-semibold font-rethink text-[#263228]">
          {getTitle()}
        </h2>
      </div>

      {/* 1. Shelters View */}
      {actionId === 'find-shelter' && (
        <div className="space-y-6">
          {SHELTERS.map((shelter) => {
            const pct = Math.round((shelter.capacity.current / shelter.capacity.max) * 100);
            return (
              <div
                key={shelter.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold font-rethink text-[#263228]">
                      {shelter.name}
                    </h3>
                    <p className="text-sm text-[#6c757d] font-montserrat flex items-center gap-1.5 mt-1">
                      <MapPin className="size-4 text-[#54BF44]" />
                      <span>{shelter.address}</span>
                      <span className="font-semibold text-[#54BF44]">({shelter.distance} km)</span>
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-[#DEF3C6] text-[#263228] font-medium shrink-0">
                    {pct}% ocupado
                  </Badge>
                </div>

                {/* Capacity Progress */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-montserrat text-[#6c757d]">
                    <span>Capacidade atual</span>
                    <span>
                      {shelter.capacity.current} / {shelter.capacity.max} vagas
                    </span>
                  </div>
                  <Progress value={pct} className="h-2 bg-gray-100 [&>div]:bg-[#54BF44]" />
                </div>

                {/* Services & Indicators */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                  {shelter.services.map((svc) => (
                    <span
                      key={svc}
                      className="text-xs bg-gray-100 text-[#263228] px-3 py-1 rounded-full capitalize"
                    >
                      {svc}
                    </span>
                  ))}
                  {shelter.accessibility && (
                    <span className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Accessibility className="size-3.5" />
                      Acessível
                    </span>
                  )}
                  {shelter.pets && (
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Dog className="size-3.5" />
                      Aceita Pets
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-200 text-[#263228] hover:bg-gray-50 rounded-xl py-5"
                  >
                    <a href={`tel:${shelter.phone}`}>
                      <Phone className="size-4 mr-2 text-[#54BF44]" />
                      Ligar
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-xl py-5"
                  >
                    <a
                      href={`https://maps.google.com/?q=${shelter.coordinates.lat},${shelter.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="size-4 mr-2" />
                      Como chegar
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Volunteer Opportunities */}
      {actionId === 'find-opportunities' && (
        <div className="space-y-6">
          {VOLUNTEER_OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-rethink text-[#263228]">
                    {opp.title}
                  </h3>
                  <p className="text-sm text-[#54BF44] font-semibold font-montserrat">
                    {opp.organization}
                  </p>
                  <p className="text-xs text-[#6c757d] font-montserrat flex items-center gap-1 mt-1">
                    <MapPin className="size-3.5" />
                    {opp.address} ({opp.distance} km)
                  </p>
                </div>
                <Badge
                  className={
                    opp.urgency === 'alta'
                      ? 'bg-red-100 text-red-700 border-none'
                      : 'bg-amber-100 text-amber-700 border-none'
                  }
                >
                  Urgência {opp.urgency}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[#263228] bg-gray-50 p-3.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#6c757d]" />
                  <span>{opp.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-[#6c757d]" />
                  <span>
                    {opp.volunteers.current} de {opp.volunteers.needed} voluntários
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#6c757d] uppercase tracking-wider mb-2">
                  Tarefas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {opp.tasks.map((task) => (
                    <span key={task} className="text-xs bg-gray-100 px-3 py-1 rounded-full capitalize">
                      {task}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => alert(`Inscrição enviada para ${opp.title}! Nossa equipe entrará em contato.`)}
                className="w-full bg-[#0d6efd] hover:bg-blue-700 text-white rounded-xl py-5 font-semibold font-rethink"
              >
                Quero participar
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* 3. Register Skills */}
      {actionId === 'register-skills' && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <p className="text-base text-[#263228] font-montserrat">
            Selecione as áreas em que você pode contribuir como voluntário:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Culinária e Alimentação',
              'Apoio Psicológico / Escuta',
              'Primeiros Socorros / Enfermagem',
              'Transporte e Logística',
              'Triagem e Organização de Doações',
              'Resgate / Força Física',
              'Apoio a Idosos e Crianças',
              'Acolhimento com Pets',
            ].map((skill) => {
              const isSelected = selectedSkill.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => {
                    setSelectedSkill((prev) =>
                      isSelected ? prev.filter((s) => s !== skill) : [...prev, skill]
                    );
                  }}
                  className={`p-4 rounded-xl border-2 text-left font-montserrat text-sm font-medium transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-[#54BF44] bg-[#DEF3C6]/30 text-[#263228]'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <span>{skill}</span>
                  {isSelected && <Check className="size-4 text-[#54BF44]" />}
                </button>
              );
            })}
          </div>

          {skillsSubmitted ? (
            <div className="p-4 rounded-xl bg-[#DEF3C6] text-center text-[#263228] font-medium animate-in fade-in">
              Habilidades registradas com sucesso! Entraremos em contato assim que surgir uma demanda no seu perfil.
            </div>
          ) : (
            <Button
              onClick={() => setSkillsSubmitted(true)}
              disabled={selectedSkill.length === 0}
              className="w-full bg-[#54BF44] hover:bg-[#459A37] text-white rounded-xl py-6 font-semibold font-rethink text-base"
            >
              Salvar minhas habilidades
            </Button>
          )}
        </div>
      )}

      {/* 4. Donation Points */}
      {actionId === 'donate-items' && (
        <div className="space-y-6">
          {DONATION_POINTS.map((pt) => (
            <div
              key={pt.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-rethink text-[#263228]">
                    {pt.name}
                  </h3>
                  <p className="text-sm text-[#6c757d] font-montserrat flex items-center gap-1.5 mt-1">
                    <MapPin className="size-4 text-[#54BF44]" />
                    {pt.address} ({pt.distance} km)
                  </p>
                </div>
                <Badge
                  className={
                    pt.urgency === 'alta'
                      ? 'bg-red-100 text-red-700 border-none'
                      : 'bg-amber-100 text-amber-700 border-none'
                  }
                >
                  Urgência {pt.urgency}
                </Badge>
              </div>

              <div>
                <p className="text-xs font-semibold text-[#6c757d] uppercase tracking-wider mb-2">
                  Itens aceitos com prioridade:
                </p>
                <div className="flex flex-wrap gap-2">
                  {pt.neededItems.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-[#DEF3C6]/60 text-[#263228] px-3 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#6c757d] pt-2 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  Horário: {pt.schedule}
                </span>
                <a href={`tel:${pt.phone}`} className="text-[#54BF44] font-semibold hover:underline">
                  {pt.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5. Donate Money (PIX) */}
      {actionId === 'donate-money' && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#54BF44] flex items-center justify-center mx-auto">
            <QrCode className="size-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold font-rethink text-[#263228]">
              {PIX_DATA.beneficiary}
            </h3>
            <p className="text-sm text-[#6c757d] font-montserrat mt-1">
              Doação 100% auditada e convertida diretamente em mantimentos e resgate.
            </p>
          </div>

          {/* Value options */}
          <div className="flex flex-wrap justify-center gap-3">
            {PIX_DATA.suggestedValues.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setSelectedAmount(val)}
                className={`px-5 py-2.5 rounded-full font-montserrat font-semibold text-sm transition-all ${
                  selectedAmount === val
                    ? 'bg-[#54BF44] text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-[#263228]'
                }`}
              >
                R$ {val}
              </button>
            ))}
          </div>

          {/* PIX Key Box */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between gap-3 text-left">
            <div>
              <span className="text-xs text-[#6c757d] block font-montserrat">
                Chave PIX ({PIX_DATA.keyType})
              </span>
              <span className="text-base font-bold font-mono text-[#263228] select-all">
                {PIX_DATA.pixKey}
              </span>
            </div>
            <Button
              onClick={handleCopyPix}
              className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-lg px-4 shrink-0"
            >
              {copiedPix ? (
                <>
                  <Check className="size-4 mr-1.5" /> Copiado!
                </>
              ) : (
                <>
                  <Copy className="size-4 mr-1.5" /> Copiar
                </>
              )}
            </Button>
          </div>

          <div className="text-xs text-[#6c757d] font-montserrat leading-relaxed">
            Banco: {PIX_DATA.bank} | Agência: {PIX_DATA.agency} | Conta: {PIX_DATA.account}
          </div>
        </div>
      )}

      {/* 6. Urgent Needs */}
      {(actionId === 'urgent-needs' || actionId === 'nearby-needs') && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
          <p className="text-sm text-[#6c757d] font-montserrat">
            Atualizado em tempo real pelas equipes de campo e abrigos:
          </p>
          <div className="divide-y divide-gray-100">
            {URGENT_NEEDS.map((item, idx) => (
              <div key={idx} className="py-4 flex items-center justify-between gap-4">
                <div>
                  <strong className="block text-base font-rethink text-[#263228]">
                    {item.item}
                  </strong>
                  <span className="text-xs text-[#6c757d] font-montserrat">
                    {item.category} • Ponto de entrega: {item.location}
                  </span>
                </div>
                <Badge
                  className={
                    item.urgency === 'urgente'
                      ? 'bg-red-500 text-white'
                      : 'bg-amber-100 text-amber-800'
                  }
                >
                  {item.urgency}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Support & Emergency Contacts */}
      {(actionId === 'get-support' || actionId === 'emergency-contacts') && (
        <div className="space-y-4">
          {SUPPORT_CONTACTS.map((sc) => (
            <div
              key={sc.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold font-rethink text-[#263228]">
                    {sc.name}
                  </h3>
                  {sc.badge && (
                    <Badge variant="outline" className="text-xs font-normal">
                      {sc.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-[#6c757d] font-montserrat mt-0.5">
                  {sc.description}
                </p>
                <span className="text-xs text-gray-400 font-montserrat mt-1 block">
                  {sc.hours}
                </span>
              </div>
              <Button
                asChild
                className="bg-[#54BF44] hover:bg-[#459A37] text-white rounded-xl py-5 px-6 font-semibold shrink-0"
              >
                <a href={`tel:${sc.phone}`}>
                  <Phone className="size-4 mr-2" />
                  Ligar {sc.phone}
                </a>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

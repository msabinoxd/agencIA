import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { CONFIG } from '../config';

export function PrivacyPolicy({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.2)] max-w-2xl w-full max-h-[85vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E9ECEF] shrink-0">
          <h2 className="text-xl font-bold text-[#1A1A1A]">Política de Privacidade</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] flex items-center justify-center hover:bg-[#E9ECEF] transition-colors"
          >
            <X className="w-4 h-4 text-[#4A4A4A]" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 text-[#4A4A4A] text-sm leading-relaxed space-y-6">
          <p className="text-xs text-[#888888]">Última atualização: março de 2026</p>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">1. Sobre esta Política</h3>
            <p>
              A <strong className="text-[#1A1A1A]">{CONFIG.brand.name}</strong> ("nós", "nosso") se compromete com a proteção da sua privacidade.
              Esta Política descreve como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a
              Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">2. Dados Coletados</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-[#1A1A1A]">Dados de navegação:</strong> páginas acessadas, tempo de visita, tipo de dispositivo e navegador (via cookies de sessão).</li>
              <li><strong className="text-[#1A1A1A]">Dados fornecidos voluntariamente:</strong> nome, telefone e mensagem ao entrar em contato via WhatsApp.</li>
              <li><strong className="text-[#1A1A1A]">Cookies:</strong> utilizamos cookies essenciais para o funcionamento do site e de preferência para salvar suas escolhas de consentimento.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">3. Finalidade do Uso</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Melhorar a experiência de navegação no site.</li>
              <li>Responder às suas solicitações de contato comercial.</li>
              <li>Analisar o desempenho do site e otimizar o conteúdo.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">4. Base Legal</h3>
            <p>
              O tratamento dos seus dados é baseado no seu <strong className="text-[#1A1A1A]">consentimento</strong> (Art. 7º, I da LGPD)
              e no <strong className="text-[#1A1A1A]">legítimo interesse</strong> para fins de comunicação comercial (Art. 7º, IX).
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">5. Compartilhamento de Dados</h3>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing,
              exceto quando necessário para prestação de serviços (ex.: plataformas de CRM integradas) ou por exigência legal.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">6. Seus Direitos (LGPD)</h3>
            <p>Você tem direito a:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Confirmar a existência de tratamento dos seus dados.</li>
              <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Portabilidade dos dados para outro fornecedor de serviço.</li>
              <li>Se opor ao tratamento de dados desnecessários.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">7. Retenção de Dados</h3>
            <p>
              Os dados são mantidos pelo tempo necessário para cumprir a finalidade para a qual foram coletados
              ou conforme exigência legal, sendo eliminados após esse período.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#1A1A1A] text-base mb-2">8. Contato e DPO</h3>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo WhatsApp:{' '}
              <strong className="text-[#0090FF]">+55 (11) 98865-2345</strong>.
            </p>
          </section>
        </div>

        {/* Footer do modal */}
        <div className="px-8 py-5 border-t border-[#E9ECEF] shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#0090FF] text-white font-bold text-sm hover:bg-[#007ACC] transition-colors"
          >
            Entendi e Aceito
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

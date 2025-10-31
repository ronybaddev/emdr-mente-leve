import { Brain, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const features = [{
  icon: Brain,
  title: "Baseado em Neurociência",
  description: "Método cientificamente comprovado que trabalha com os processos naturais do cérebro"
}, {
  icon: Heart,
  title: "Tratamento Eficaz",
  description: "Resultados comprovados no tratamento de traumas, ansiedade e fobias"
}, {
  icon: Sparkles,
  title: "Transformação Profunda",
  description: "Promove mudanças duradouras e significativas na sua vida emocional"
}];
export const AboutEMDR = () => {
  return <section id="o-que-e" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O que é <span className="text-primary">EMDR</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EMDR (Eye Movement Desensitization and Reprocessing) é uma abordagem psicoterapêutica 
            que ajuda pessoas a se recuperarem de traumas e experiências angustiantes através de 
            movimentos oculares bilaterais e técnicas de processamento cognitivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-card rounded-4xl p-8 shadow-lg animate-fade-in rounded-md">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground">Como funciona?</h3>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">O Processo</h4>
              <p>
                Durante a sessão de EMDR, você será guiado pelo seu terapeuta a recordar lembranças específicas 
                enquanto realiza movimentos bilaterais. Este processo ajuda o cérebro 
                a reprocessar memórias difíceis de forma mais adaptativa. O EMDR usa estímulos bilaterais, 
                como movimentos oculares, para ajudar o cérebro a reprocessar memórias traumáticas e reduzir 
                seu impacto emocional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Reconhecimento Mundial</h4>
              <p>
                A terapia EMDR é reconhecida pela OMS (Organização Mundial da Saúde) como um dos 
                tratamentos mais eficazes para Transtorno de Estresse Pós-Traumático (TEPT) e 
                diversos outros transtornos emocionais.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Origem e Desenvolvimento</h4>
              <p>
                Desenvolvido por Francine Shapiro nos anos 1980 para tratar o transtorno de estresse 
                pós-traumático (TEPT). O paciente foca em uma memória traumática enquanto recebe 
                estímulos bilaterais (visuais, auditivos ou táteis), o que ajuda o cérebro a 
                "desbloquear" e reprocessar essa memória.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Objetivo e Indicações</h4>
              <p className="text-card-foreground mb-2 text-base font-normal">
                Objetivo: Reduzir o sofrimento emocional associado à lembrança, 
                promovendo alívio psicológico.
              </p>
              <p className="text-base font-normal text-slate-600">
                Indicações: Além do TEPT, é usado para tratar ansiedade, depressão, 
                luto, dor crônica e outros transtornos emocionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
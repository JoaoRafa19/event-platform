import { CheckCircle, Lock } from 'phosphor-react';
import {isPast, format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
interface LessonProps {
    title: string;
    slug: string;
    avaliableAt: Date;
    type: 'live' | 'class';

}

export function Lesson (props: LessonProps) {

    const isLessonAvaliable = isPast(props.avaliableAt);
    const availableDateFormated = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • ' k'h'mm ", {locale: ptBR});

    return (
        <a href="#">
            <span className="text-gray-300"
            >
                {availableDateFormated}</span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {
                        isLessonAvaliable ? (
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20}/>
                        Conteudo Liberado
                    </span>
                        ) : <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20}/>
                        Em Breve
                    </span>
                    }
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type === 'live' ? 'Aula ao Vivo' : 'Aula Prática'}
                        </span>
                </header>
                <strong className="text-gray-200 mt-5 block">{props.title}</strong>
            </div>
        </a> 
        )
}
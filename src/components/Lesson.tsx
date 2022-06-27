import { CheckCircle, Lock } from 'phosphor-react';
import {isPast, format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {Link, useParams} from 'react-router-dom';
interface LessonProps {
    title: string;
    slug: string;
    avaliableAt: Date;
    type: 'live' | 'class';

}

export function Lesson (props: LessonProps) {

    const {slug} = useParams<{slug: string}>();

    const isLessonAvaliable = isPast(props.avaliableAt);
    const availableDateFormated = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • ' k'h'mm ", {locale: ptBR});
    const activeClass = slug === props.slug ;

    return (
        <Link  to={isLessonAvaliable ? `/event/lesson/${props.slug}` : '#'} className='group'>
            <span className="text-gray-300"
            >
                {availableDateFormated}</span>
            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${activeClass ? 'bg-green-500' : ''}`}>
                <header className="flex items-center justify-between">
                    {
                        isLessonAvaliable ? (
                            <span className={`text-sm  font-medium flex items-center gap-2 ${activeClass ? 'text-white' : 'text-blue-500'} `}>
                        <CheckCircle size={20}/>
                        Conteudo Liberado
                    </span>
                        ) : <span className={`text-sm text-orange-500 font-medium flex items-center gap-2` }>
                        <Lock size={20}/>
                        Em Breve
                    </span>
                    }
                    <span className={`text-xs rounded py-[0.125rem] px-2 text-white border  font-bold ${activeClass ? 'border-white' :'border-green-300'}`}>
                        {props.type === 'live' ? 'Aula ao Vivo' : 'Aula Prática'}
                        </span>
                </header>
                <strong className={` mt-5 block ${activeClass ? 'text-white' : 'text-gray-200'}`}>{props.title}</strong>
            </div>
        </Link> 
        )
}
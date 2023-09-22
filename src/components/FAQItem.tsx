import { FAQType } from "../data/faq";

type FAQItemProps = {
    question: FAQType,
}

const FAQItem = ({question}: FAQItemProps) => {
  return (
    <li className='flex gap-4 items-end justify-between pb-2 pt-3 border-b border-pinkish'>
        <p>{question}</p>

        <span className='text-pinkish text-xl'>+</span>
    </li>
  )
}

export default FAQItem
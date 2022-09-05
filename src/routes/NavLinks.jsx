import { BiBookContent, BiSun } from "react-icons/bi"
import { GrUserSettings } from "react-icons/gr"
import { AiOutlineBell } from "react-icons/ai"

const navLinks = [
    {
        type: 'Manage',
        routes: [
            {
                name: 'App Content',
                icon: <BiBookContent className="w-5 h-5" />,
                to: '/content'
            },
            {
                name: 'Users',
                icon: <GrUserSettings className="w-5 h-5" />,
                to: '/users'
            },
             {
                name: 'Horoscope',
                icon: <BiSun className="w-5 h-5" />,
                to: '/horoscope'
            },
        ]
    },
    {
        type: 'Sample',
        routes: [
            {
                name: 'Sample',
                icon: <AiOutlineBell className="w-5 h-5" />,
                to: '/sample'
            },
        ]
    },
]

export default navLinks
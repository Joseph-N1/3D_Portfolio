import { useState } from 'react'

const useAlert = () => {
    const [alert, setalert] = useState({show: false, text: '', typr: 'danger'})

    const showAlert = ({ text, type = 'danger '}) => setalert({
        show: true,
        text,
        type
    })

    const hideAlert = () => setalert({
        show: false,
        text: '',
        type: 'danger'
    })

  return { alert, showAlert, hideAlert }
}

export default useAlert
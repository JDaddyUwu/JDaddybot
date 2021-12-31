const welmenu = (prefix, pushname) => {
    return `
*Comandos De Bienvenida 👋*

*PARA ACTIVAR LA BIENVENIDA*

- ${prefix}welcome 1

*PARA DESACTIVAR LA BIENVENIDA*

- ${prefix}welcome 0

_Para activar este comando el bot necesita tener admin_

_*by 🍒𝘿𝙖𝙙𝙙𝙮🍒*_
`

}

exports.welmenu = welmenu

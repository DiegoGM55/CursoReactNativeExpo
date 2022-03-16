import logo from '../assets/logo.png';
import topo from '../assets/topo.png';

import antena3g from '../assets/Itens/antena2g3g.png'
import antenaWifi from '../assets/Itens/antenaWifi.png'
import modem from '../assets/Itens/modem.png'
import nodeMcu from '../assets/Itens/nodeMcu.png'

const carrinho = {

    topo:{
        titulo:"Detalhes da cesta",
        imagem: topo,
    },
    corpo:{
        nome:"Kit IOT",
        nomeVendedor:"Cloud Shopping",
        imagemVendedor: logo,
        desc:"Um kit iot para iniciantes irem as nuvens",
        preco:"R$ 99,00",
    },
    itens:{
        titulo: "Itens do Carrinho",
        lista:[
            {
                nome: "Antena 3G",
                imagem: antena3g,
            },
            {
                nome: "Antena Wifi",
                imagem: antenaWifi,
            },
            {
                nome: "Modem",
                imagem: modem,
            },
            {
                nome: "Node MCU ",
                imagem: nodeMcu,
            },
        ]
    }
}

export default carrinho;
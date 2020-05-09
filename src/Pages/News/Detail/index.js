import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native';



 import Header from '../../../Components/HeaderStack';
 import Styles from './styles';
 import ImageNews from '../../../assets/news/News1/img1.jpg';

import backgroundImage from '../../../assets/backgroundImage.png';



export default function Detail() {
    return (
        <ScrollView>
            <View style={[Styles.containerDetail, ]}>
                <Header />

                <Text style={Styles.title}>
                        ONG ARRECADA MAIS DE R$ 7 MIL COM ESTACIONAMENTO NA ABERTURA OFICIAL DA COLHEITA DO ARROZ
                </Text>

                <Image source={ImageNews} resizeMode="contain" style={Styles.image} />

                <Text style={Styles.description}>     A ONG Semear, responsável pelo atendimento de 150 crianças em situação de vulnerabilidade em Capão do Leão (RS), arrecadou R$ 7,5 mil por sua participação nos três dias da Abertura Oficial da Colheita do Arroz, que ocorreu de 12 a 14 de fevereiro na Estação Experimental Terras Baixas, da Embrapa Clima Temperado. A instituição ficou responsável pelo estacionamento onde arrecadou o valor. No ano passado foram mais de R$ 5 mil em contribuições do público do evento.
                </Text>
                <Text style={Styles.description}>     Com isto, conforme o coordenador do projeto social, Rafael Furtado Peres, a instituição vai investir em melhorias e conforto no atendimento para as crianças. Além disso, a verba já ajudou no pagamento do aluguel do espaço físico da ONG. “Já fizemos um acerto de quatro meses de aluguel que foram pagos, o que vai nos dar um fôlego para manter estas crianças. Agora vamos atrás de uniformes para as crianças no qual queremos marcar com o apoio da Federarroz, além de materiais esportivos e escolar”, salienta.
                </Text>
                <Text style={Styles.description}>     A ONG Semear atende crianças cadastradas que vivem em situação de vulnerabilidade social, sendo que 54 delas se alimentam diariamente na organização. Entre as atividades realizadas estão refeições para as crianças carentes, projetos de horta comunitária e de aulas de informática, de dança, de futebol, de artesanato, línguas, entre outras. A instituição funciona na rua Erico Verissimo, número 360, bairro Jardim América, em Capão do Leão. Os interessados podem contribuir com doações podem entrar em contato através do telefone (53) 99936.6995.
                </Text>

                
            </View>
            <Image style={Styles.background} source={backgroundImage} />
        </ScrollView>
    )}

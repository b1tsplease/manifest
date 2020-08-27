import Head from 'next/head';
import { useState } from 'react';
import Content from '../components/Content';
import DepositionsSection from '../components/DepositionsSection';
import FormSection from '../components/FormSection';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IFrame from '../components/IFrame';
import InfoBullets from '../components/InfoBullets';
import Modal from '../components/Modal';
import ReadManifest from '../components/ReadManifest';
import Supporters from '../components/Supporters';
import { YouTube } from '../components/Video';

export default function Home() {

  const [depositions, setDepositions] = useState([
    { type: 'comment', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', author: 'Anderson Santos', ocuppation: 'Developer' },
    { type: 'video', videoUrl: 'https://www.youtube.com/embed/rHax1Pg-iSM', imageUrl: '/images/video-deposition.png', imageAlt: 'Vídeo do Fulano falando em algum lugar', author: 'Anderson Santos', ocuppation: 'Developer' },
  ]);

  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [isManifestModalVisible, setIsManifestModalVisible] = useState(false);

  const handleVideoModalOpen = () => setIsVideoModalVisible(true);
  const handleVideoModalDismiss = () => setIsVideoModalVisible(false);

  const handleManifestModalOpen = () => setIsManifestModalVisible(true);
  const handleManifestModalDismiss = () => setIsManifestModalVisible(false);

  return (
    <div>
      <Head>
        <title>Internet pela Educação</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <Content>
        <Modal
          visible={isVideoModalVisible}
          onDismiss={handleVideoModalDismiss}
        >
          <YouTube src="https://www.youtube.com/embed/rHax1Pg-iSM" />
        </Modal>

        <Modal
          visible={isManifestModalVisible}
          onDismiss={handleManifestModalDismiss}
        >
          <IFrame src="/files/manifesto_pela_educacao.pdf"></IFrame>
        </Modal>


        <Hero onClickWatchVideo={handleVideoModalOpen} />

        <InfoBullets />

        <ReadManifest onClickReadManifest={handleManifestModalOpen} />

        <DepositionsSection data={depositions} />

        <FormSection />

        <Supporters />
      </Content>
    </div>
  )
};

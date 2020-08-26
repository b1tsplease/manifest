import Head from 'next/head';
import { useState } from 'react';
import Content from '../components/Content';
import DepositionsSection from '../components/DepositionsSection';
import Header from '../components/Header';
import Hero from '../components/Hero';
import InfoBullets from '../components/InfoBullets';
import Modal from '../components/Modal';
import ReadManifest from '../components/ReadManifest';
import { YouTube } from '../components/Video';

export default function Home() {

  const [depositions, setDepositions] = useState([
    { type: 'comment', comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', author: 'Anderson Santos', ocuppation: 'Developer' },
    { type: 'video', videoUrl: 'https://www.youtube.com/embed/rHax1Pg-iSM', imageUrl: '/images/video-deposition.png', imageAlt: 'Vídeo do Fulano falando em algum lugar', author: 'Anderson Santos', ocuppation: 'Developer' },
  ]);

  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);

  const handleVideoModalOpen = () => setIsVideoModalVisible(true);

  const handleVideoModalDismiss = () => setIsVideoModalVisible(false);

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

        <Hero onClickWatchVideo={handleVideoModalOpen} />

        <InfoBullets />

        <ReadManifest />

        <DepositionsSection data={depositions} />
      </Content>
    </div>
  )
};

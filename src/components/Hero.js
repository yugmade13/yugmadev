import React from 'react';
import Article from './styled/Article';
import Heading1 from './styled/Heading1';
import Paragraph from './styled/Paragraph';

function Hero() {
  return (
    <Article>
      <Heading1>
        Hai Saya
        <br />
        Yugma Dewangga 👋
      </Heading1>
      <Paragraph>
        Saya adalah seorang Front-End Web Developer yang berpengalaman mengembangkan website yang menarik dan
        fungsional.
        Saya tertarik pada penulisan kode yang baik, rapi, terstruktur serta mudah dibaca karena saya peduli.
      </Paragraph>
    </Article>
  );
}

export default Hero;

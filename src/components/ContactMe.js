import React from 'react';
import Formspree from './Formspree';
import Article from './styled/Article';
import Heading2 from './styled/Heading2';
import Paragraph from './styled/Paragraph';

function ContactMe() {
  return (
    <Article>
      <Heading2>
        Kirim Pesan
      </Heading2>
      <Paragraph aria-label="contact-paragraph">
        Ajukan pertanyaan melalui form dibawah ini.
      </Paragraph>
      <Formspree />
    </Article>
  );
}

export default ContactMe;

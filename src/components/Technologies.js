import React from 'react';
import Article from './styled/Article';
import Heading2 from './styled/Heading2';
import Paragraph from './styled/Paragraph';
import Brand from './Brand';

function Technologies() {
  return (
    <Article>
      <Heading2>
        Teknologi
      </Heading2>
      <Paragraph>
        Saya menggunakan berbagai macam
        <i> tools </i>
        untuk mempermudah proses pengembangan dan meningkatkan kualitas baik kode maupun proyek saya. Berikut adalah daftar teknologi dan bahasa pemrograman yang pernah saya gunakan atau masih saya gunakan saat ini.
      </Paragraph>
      <Brand />
    </Article>
  );
}

export default Technologies;

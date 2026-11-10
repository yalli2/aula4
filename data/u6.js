AULA.unit({
  n: 6, title: 'Se valorará la experiencia', ko: '경험을 우대합니다 — 공모전 조건 정하기',
  goal: '조건과 요건 정하기, 규정 쓰기 — 공모전 참가 조건을 만들고 우승작 선정하기',
  can: ['비인칭 se (se valorará…)', '수동문', '완료 부정사 (haber + 과거분사)', '접속법 현재완료', 'quienes / aquellos que / todo aquel que / el que'],
  tags: ['se impersonal', 'pasiva', 'infinitivo compuesto', 'perfecto de subjuntivo', 'requisitos', 'concurso', 'educación'],
  vocab: [
    { g: '요건 · Condiciones y requisitos', w: [['las bases del concurso', '공모전 요강'], ['el requisito', '요건'], ['el plazo de inscripción', '접수 기간'], ['la fecha límite', '마감일'], ['presentar una obra', '작품을 제출하다'], ['el jurado', '심사위원단'], ['el fallo del jurado', '심사 결과'], ['quedar excluido/-a', '제외되다'], ['ser imprescindible', '필수이다'], ['se valorará', '우대한다'], ['inédito/-a', '미발표의'], ['el premio en metálico', '상금']] },
    { g: '교육 · Educación', w: [['el expediente académico', '학업 성적 기록'], ['la matrícula', '등록'], ['la convocatoria', '모집 공고'], ['el certificado', '증명서'], ['la titulación', '학위·자격'], ['la beca de estudios', '학업 장학금'], ['las prácticas', '실습'], ['el intercambio', '교환 학생 프로그램']] },
    { g: '정치·사회 · Sociedad', w: [['la ciudadanía', '시민'], ['el derecho a', '~할 권리'], ['el deber', '의무'], ['la normativa', '규정'], ['entrar en vigor', '시행되다'], ['la mayoría de edad', '성년'], ['el empadronamiento', '주민 등록']] }
  ],
  gram: [
    { h: '비인칭 se — 규정 쓰기', ex: [['Se valorará la originalidad.', '독창성을 우대한다.'], ['No se admitirán obras presentadas fuera de plazo.', '마감 이후 제출된 작품은 접수하지 않는다.'], ['Se requiere un nivel B1 de español.', '스페인어 B1 수준이 요구된다.']] },
    { h: '완료 부정사 haber + 과거분사', p: '어떤 시점 **이전에 완료**된 것을 요건으로 말할 때.', ex: [['Es imprescindible haber cumplido 16 años.', '16세 이상이어야 한다(만 16세가 지났어야 한다).'], ['Se valorará haber participado en otros concursos.', '다른 공모전 참가 경험을 우대한다.']] },
    { h: '접속법 현재완료 (haya + 과거분사)', t: [['', 'haber (접속법)'], ['yo', 'haya'], ['tú', 'hayas'], ['él/ella/usted', 'haya'], ['nosotros', 'hayamos'], ['vosotros', 'hayáis'], ['ellos', 'hayan']], ex: [['Podrán participar quienes hayan nacido después de 2008.', '2008년 이후 출생자는 참가할 수 있다.'], ['No creo que hayan elegido bien.', '그들이 잘 골랐다고 생각하지 않아.']] },
    { h: '불특정 대상: quienes / aquellos que / todo aquel que / el que', p: '불특정 사람을 가리킬 때 **접속법**.', ex: [['Todo aquel que quiera participar deberá inscribirse online.', '참가하고자 하는 사람은 누구든 온라인으로 등록해야 한다.'], ['Los que tengan dudas pueden escribir a…', '질문이 있는 사람은 …로 메일 보내면 된다.']] }
  ],
  ex: [
    { k: 'fill', t: '규정 쓰기 — 비인칭 se 미래', it: ['Se [valorará] la creatividad. (valorar)', 'No se [admitirán] trabajos de más de 5 páginas. (admitir)', 'Se [entregarán] tres premios. (entregar)', 'Se [publicará] el fallo el 30 de mayo. (publicar)'] },
    { k: 'fill', t: '완료 부정사', it: ['Es necesario [haber terminado] el bachillerato. (terminar)', 'Se valorará [haber vivido] en el extranjero. (vivir)', 'Es imprescindible no [haber ganado] este premio antes. (ganar)', 'Después de [haber leído] las bases, rellena el formulario. (leer)'] },
    { k: 'fill', t: '접속법 현재완료', it: ['Podrán participar los alumnos que [hayan aprobado] el curso. (aprobar)', 'Es posible que ya [hayan publicado] los resultados. (publicar)', 'No creo que Ana [haya enviado] su obra. (enviar)', 'Ojalá [hayamos ganado]. (ganar, nosotros)'] },
    { k: 'fill', t: '직설법? 접속법?', d: '특정한 사람(직설법) vs. 불특정한 사람(접속법)', it: ['Los que {*han ganado|hayan ganado} este año son de Chile. (특정)', 'Los que {han ganado|*hayan ganado} el año pasado no podrán participar. (규정)', 'Todo aquel que {quiere|*quiera} inscribirse debe ser mayor de edad.', 'Quienes {*viven|vivan} en mi calle son muy simpáticos. (특정)'] },
    { k: 'tf', t: '읽기 — 공모전 요강', text: '**I CONCURSO DE MICRORRELATOS «VOCES JÓVENES»**\n1. Podrán participar todos aquellos que tengan entre 14 y 18 años y que estén matriculados en un centro educativo.\n2. Los relatos deberán ser inéditos y no superar las 150 palabras.\n3. Se valorará la originalidad y el uso creativo del idioma.\n4. Quedarán excluidas las obras que hayan sido premiadas en otros concursos.\n5. El plazo de inscripción termina el 15 de marzo. El fallo del jurado se publicará en abril.\n6. Premio: 300 € y la publicación del relato.',
      it: [['Pueden participar jóvenes de 20 años.', false], ['Los relatos pueden tener 200 palabras.', false], ['Se valora la originalidad.', true], ['Se aceptan relatos que ya han ganado otros premios.', false], ['El ganador recibe dinero y una publicación.', true]] },
    { k: 'dlg', t: '듣기 — 심사위원 회의', listen: 1,
      lines: [['Presidenta', 'Bueno, tenemos tres finalistas. ¿Qué os parece el relato de la nave espacial?'], ['Jurado 1', 'Es original, pero no creo que el autor haya respetado el límite de palabras.'], ['Jurado 2', 'Lo he contado: tiene 162. Queda excluido.'], ['Presidenta', 'Entonces, ¿el de la abuela o el del perro?'], ['Jurado 1', 'Yo votaría por el de la abuela; es el que mejor usa el idioma.'], ['Jurado 2', 'De acuerdo. Y el del perro, mención especial.']],
      it: [['우주선 이야기는 왜 제외됐나요?', '독창성 부족|*단어 수 초과|미발표가 아님'], ['우주선 이야기의 단어 수는?', '150|*162|126'], ['우승작은?', '우주선 이야기|*할머니 이야기|개 이야기'], ['개 이야기는?', '탈락|우승|*특별상']] },
    { k: 'match', t: '요강 어휘', it: [['el plazo de inscripción', '접수 기간'], ['el jurado', '심사위원단'], ['inédito', '미발표의'], ['el fallo', '심사 결과'], ['imprescindible', '필수의'], ['quedar excluido', '제외되다']] },
    { k: 'order', t: '문장 만들기', it: ['Se valorará la experiencia previa.', 'Es imprescindible haber cumplido dieciocho años.', 'Podrán participar quienes vivan en la ciudad.', 'No se admitirán obras fuera de plazo.'] },
    { k: 'dict', t: '받아쓰기', it: ['Se valorará el conocimiento de idiomas.', 'Es necesario haber terminado los estudios.', 'Todo aquel que quiera participar debe inscribirse.'] },
    { k: 'write', t: '우리 반 공모전 요강 만들기', d: '사진·영상·글쓰기 등 공모전 하나를 정해 요강 5개 항목을 쓰세요 (se + 미래, 완료 부정사, quienes/todo aquel que + 접속법).', model: 'CONCURSO DE FOTOGRAFÍA «MI BARRIO». 1. Podrán participar todos aquellos que estudien en el KCIS. 2. Cada participante presentará una sola fotografía, que deberá ser inédita. 3. Se valorará la originalidad y que la foto muestre la vida del barrio. 4. Quedarán excluidas las fotos que hayan sido modificadas con inteligencia artificial. 5. El fallo se publicará el 1 de junio y se entregará un premio de 100 €.' }
  ]
});

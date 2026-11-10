AULA.unit({
  n: 3, title: 'Yo nunca lo haría', ko: '나라면 절대 안 해 — 리얼리티 쇼 참가자 선정',
  goal: '조언하기, 가상의 상황 떠올리기, 행동·태도에 의견 말하기, 바람 표현하기, 몰랐던 것 말하기',
  can: ['조건법 활용', 'te recomiendo / aconsejo / sugiero que + 접속법 현재', '접속법 과거 (imperfecto de subjuntivo)', 'me daría miedo / asco / pereza…', 'no sabía que…'],
  tags: ['condicional', 'imperfecto de subjuntivo', 'consejos', 'deseos', 'deportes de riesgo', 'tradiciones', 'reality show'],
  vocab: [
    { g: '감정 반응 · Me da…', w: [['me da miedo', '무서워'], ['me da pánico', '공포스러워'], ['me da asco', '역겨워'], ['me da vergüenza', '창피해'], ['me da pereza', '귀찮아'], ['me da igual', '상관없어'], ['me da pena', '안쓰러워'], ['me da vértigo', '현기증 나'], ['me da rabia', '화나']] },
    { g: '익스트림 스포츠 · Deportes', w: [['el paracaidismo', '스카이다이빙'], ['el puenting', '번지점프'], ['la escalada', '암벽 등반'], ['el buceo', '스쿠버 다이빙'], ['el surf', '서핑'], ['el parapente', '패러글라이딩'], ['el barranquismo', '캐니어닝'], ['el esquí fuera de pista', '오프피스트 스키']] },
    { g: '전통 행사 · Tradiciones', w: [['los Sanfermines', '산페르민 축제(소몰이)'], ['la Tomatina', '토마토 축제'], ['los castells', '인간 탑 쌓기'], ['las Fallas', '라스 파야스(대형 인형 태우기)'], ['el Día de Muertos', '망자의 날'], ['la Semana Santa', '성주간'], ['las uvas de Nochevieja', '12시 포도 먹기']] }
  ],
  gram: [
    { h: '조건법 — 가정·조언', ex: [['Yo no saltaría en paracaídas.', '나라면 스카이다이빙 안 할 거야.'], ['Yo que tú, no iría.', '내가 너라면 안 갈 거야.'], ['Me encantaría participar en un concurso.', '경연에 참가하면 정말 좋겠어.']] },
    { h: '조언: te recomiendo / aconsejo / sugiero que + 접속법 현재', ex: [['Te recomiendo que lleves agua.', '물을 챙기는 걸 추천해.'], ['Os sugiero que reservéis con tiempo.', '미리 예약하길 제안해.']] },
    { h: '접속법 과거 (imperfecto de subjuntivo)', p: '**ellos 단순과거**에서 -ron을 떼고 **-ra, -ras, -ra, -ramos, -rais, -ran**.', t: [['원형', 'ellos 단순과거', '접속법 과거 (yo)'], ['hablar', 'hablaron', 'hablara'], ['comer', 'comieron', 'comiera'], ['tener', 'tuvieron', 'tuviera'], ['ser / ir', 'fueron', 'fuera'], ['hacer', 'hicieron', 'hiciera'], ['poder', 'pudieron', 'pudiera'], ['decir', 'dijeron', 'dijera']], tip: '-se 형태도 있어요: hablase, comiese (같은 의미)' },
    { h: '가상 바람: me gustaría que + 접속법 과거', ex: [['Me gustaría que vinieras a la fiesta.', '네가 파티에 와 주면 좋겠어.'], ['Me daría miedo que se rompiera la cuerda.', '줄이 끊어진다면 무서울 거야.']] },
    { h: 'no sabía que… (몰랐던 사실)', ex: [['No sabía que en Valencia quemaban figuras gigantes.', '발렌시아에서 거대한 인형을 태우는 줄 몰랐어.']] }
  ],
  ex: [
    { k: 'fill', t: '조건법', it: ['Yo nunca [comería] insectos. (comer)', 'Yo que tú, [hablaría] con ella. (hablar)', '¿[Harías] puenting? (hacer, tú)', 'Mis padres no me [dejarían] ir. (dejar)', 'Nosotros [podríamos] ir en tren. (poder)'] },
    { k: 'fill', t: 'recomendar/aconsejar que + 접속법 현재', it: ['Te recomiendo que [lleves] crema solar. (llevar)', 'Os aconsejo que no [bebáis] agua del grifo. (beber)', 'Le sugiero que [haga] un curso antes. (hacer)', 'Te aconsejo que [vayas] con un guía. (ir)'] },
    { k: 'fill', t: '접속법 과거 만들기', it: ['hablar → (yo) [hablara]', 'tener → (tú) [tuvieras]', 'ser → (él) [fuera]', 'poder → (nosotros) [pudiéramos]', 'hacer → (ellos) [hicieran]', 'decir → (vosotros) [dijerais]'] },
    { k: 'fill', t: 'me gustaría que / me daría … que + 접속법 과거', it: ['Me gustaría que mis amigos [vinieran] conmigo. (venir)', 'Me daría vergüenza que me [vieran] en la tele. (ver)', 'Me encantaría que [hiciera] sol mañana. (hacer)', 'Me daría pánico que se [rompiera] el puente. (romperse)'] },
    { k: 'mc', t: '어떤 감정일까?', audio: false, it: [['Comer un insecto vivo', '*me da asco|me da pena|me da igual'], ['Hablar delante de 500 personas', 'me da asco|*me da vergüenza|me da hambre'], ['Levantarme a las 5 un domingo', '*me da pereza|me da miedo|me da asco'], ['Mirar abajo desde un rascacielos', 'me da pereza|*me da vértigo|me da pena']] },
    { k: 'dlg', t: '듣기 — 리얼리티 쇼 오디션', listen: 1,
      lines: [['Presentador', 'Imagina que tienes que vivir un mes en una isla desierta. ¿Qué harías primero?'], ['Candidata', 'Buscaría agua, claro. Y construiría una cabaña.'], ['Presentador', '¿Comerías insectos?'], ['Candidata', 'Me daría muchísimo asco, pero si no hubiera otra cosa, sí.'], ['Presentador', '¿Qué es lo que más miedo te daría?'], ['Candidata', 'Que hubiera serpientes. ¡Me dan pánico!']],
      it: [['참가자가 가장 먼저 할 일은?', '*물 찾기|불 피우기|구조 요청'], ['곤충을 먹을까요?', '절대 안 먹는다|*다른 게 없으면 먹는다|좋아한다'], ['가장 무서운 것은?', '어둠|*뱀|외로움']] },
    { k: 'tf', t: '읽기 — 스페인의 독특한 전통', text: 'Si visitas Valencia en marzo, verás las **Fallas**: durante varios días se exponen en las calles enormes figuras de cartón y madera que, la última noche, se queman. En Buñol, en agosto, se celebra la **Tomatina**, una batalla en la que se lanzan miles de kilos de tomates. Y en Cataluña, los **castells** son torres humanas de hasta diez pisos. Mucha gente no sabía que estas tradiciones tenían siglos de historia; la Tomatina, sin embargo, empezó en 1945.',
      it: [['Las Fallas se celebran en marzo.', true], ['Las figuras de las Fallas se guardan en un museo.', false], ['La Tomatina es en Buñol.', true], ['Los castells pueden tener diez pisos.', true], ['La Tomatina tiene muchos siglos de historia.', false]] },
    { k: 'order', t: '문장 만들기', it: ['Yo que tú, no lo haría.', 'Te recomiendo que vayas con un guía.', 'Me gustaría que vinieras conmigo.', 'No sabía que era tan peligroso.'] },
    { k: 'dict', t: '받아쓰기', it: ['Me daría miedo saltar en paracaídas.', 'Te aconsejo que no vayas solo.', 'Si pudiera, viajaría por todo el mundo.'] },
    { k: 'write', t: '리얼리티 쇼 지원서', d: '「무인도에서 한 달」 쇼에 지원하는 글을 써 보세요. 무엇을 할지(조건법), 무엇이 무서울지(me daría…que + 접속법 과거), 다른 참가자에게 줄 조언(te recomiendo que…).', model: 'Me llamo Jiho y me encantaría participar en «Isla Desierta». Si estuviera en la isla, primero buscaría agua y después pescaría. Nunca he dormido en la naturaleza, pero no me daría miedo. Lo único que me daría pánico es que hubiera tiburones cerca de la playa. A los otros concursantes les recomiendo que lleven buen humor: ¡es lo más importante!' }
  ]
});

AULA.unit({
  n: 2, title: '¿Y tú qué opinas?', ko: '너는 어떻게 생각해? — 주민 총회',
  goal: '의견 말하기, 여러 선택지 평가하기, 조건 제시하기, 논증하기, 동의·반대하기 — 주민 총회 열기',
  can: ['creo que + 직설법 / no creo que + 접속법', 'es una tontería / impensable + 원형/접속법', 'solo si / siempre que', 'eso de…', '논리 연결어'],
  tags: ['opinión', 'creo que / no creo que', 'siempre que', 'argumentar', 'turismo', 'ciudades', 'asamblea'],
  vocab: [
    { g: '의견 · Opinar', w: [['En mi opinión…', '내 의견으로는…'], ['Desde mi punto de vista…', '내 관점에서는…'], ['A mi modo de ver…', '내가 보기에…'], ['Tengo la impresión de que…', '…라는 인상을 받아'], ['Estoy a favor de / en contra de…', '…에 찬성 / 반대야'], ['Comparto tu opinión.', '네 의견에 공감해.'], ['Ahí te doy la razón.', '그 점은 네 말이 맞아.'], ['No estoy nada de acuerdo.', '전혀 동의하지 않아.'], ['Eso no tiene nada que ver.', '그건 전혀 상관없어.'], ['Como ha dicho Ana…', '아나가 말한 것처럼…']] },
    { g: '관광·도시 · Turismo y ciudades', w: [['el turismo masivo', '대중 관광·오버투어리즘'], ['el piso turístico', '관광객용 숙소'], ['los vecinos de toda la vida', '토박이 주민들'], ['la peatonalización', '보행자 전용화'], ['el casco histórico', '구시가지'], ['la zona de ocio', '유흥가'], ['el patrimonio', '유산'], ['la tasa turística', '관광세'], ['el alquiler', '임대료'], ['el pueblo abandonado', '버려진 마을'], ['la despoblación', '인구 감소']] },
    { g: '논리 연결어 · Ordenar ideas', w: [['En primer lugar…', '첫째로…'], ['En segundo lugar…', '둘째로…'], ['Además…', '게다가…'], ['Por otro lado…', '한편…'], ['Por último…', '마지막으로…'], ['En conclusión…', '결론적으로…']] }
  ],
  gram: [
    { h: 'creo que + 직설법 / no creo que + 접속법', t: [['긍정 (직설법)', '부정 (접속법)'], ['Creo que es buena idea.', 'No creo que sea buena idea.'], ['Pienso que tienen razón.', 'No pienso que tengan razón.'], ['Me parece que funciona.', 'No me parece que funcione.']] },
    { h: '평가 + 원형 / que + 접속법', ex: [['Es una tontería prohibir los coches.', '차를 금지하는 건 바보 같은 짓이야. (일반)'], ['Es impensable que suban tanto los alquileres.', '임대료가 그렇게 오르는 건 상상도 못 할 일이야.'], ['Es lógico que los vecinos protesten.', '주민들이 항의하는 건 당연해.']] },
    { h: '조건 제시: solo si / siempre que', p: '**solo si** + 직설법 · **siempre que / siempre y cuando** + 접속법 (~하는 한, ~라는 조건이면)', ex: [['Estoy de acuerdo solo si se consulta a los vecinos.', '주민에게 물어볼 경우에만 동의해.'], ['Aceptaremos el proyecto siempre que no se corten árboles.', '나무를 베지 않는 조건이라면 프로젝트를 받아들이겠다.']] },
    { h: 'eso de + 원형 / que…', p: '앞서 언급된 주제를 가리키며 (약간 거리를 두는 뉘앙스).', ex: [['Eso de cobrar una tasa turística no me convence.', '관광세 걷자는 그 얘기, 난 별로야.']] }
  ],
  ex: [
    { k: 'fill', t: '직설법? 접속법?', it: ['Creo que el turismo {*trae|traiga} dinero al pueblo.', 'No creo que la tasa {soluciona|*solucione} el problema.', 'Pienso que los vecinos {*tienen|tengan} razón.', 'No me parece que {es|*sea} justo.', 'Me parece que el alcalde no {*escucha|escuche} a nadie.'] },
    { k: 'fill', t: '부정 의견으로 바꾸기', d: 'creo que → no creo que', it: ['Creo que es fácil. → No creo que [sea] fácil.', 'Creo que hay suficiente dinero. → No creo que [haya] suficiente dinero.', 'Pienso que pueden hacerlo. → No pienso que [puedan] hacerlo.', 'Creo que van a venir. → No creo que [vayan] a venir.'] },
    { k: 'fill', t: 'solo si / siempre que', it: ['Iré a la asamblea solo si {*termino|termine} pronto.', 'Votaré a favor siempre que se {respeta|*respete} el parque.', 'Te lo presto siempre y cuando me lo {devuelves|*devuelvas} mañana.', 'Solo si {*hay|haya} mayoría, se aprobará la propuesta.'] },
    { k: 'sort', t: '동의? 반대?', cats: ['👍 acuerdo', '👎 desacuerdo'], it: [['Comparto tu opinión.', 0], ['Eso no tiene nada que ver.', 1], ['Ahí te doy la razón.', 0], ['No estoy nada de acuerdo.', 1], ['Tienes toda la razón.', 0], ['¡Qué va!', 1]] },
    { k: 'dlg', t: '듣기 — 주민 총회', listen: 1,
      lines: [['Moderador', 'El tema de hoy: ¿debemos limitar los pisos turísticos en el casco histórico?'], ['Vecina', 'En primer lugar, creo que es urgente. Los alquileres han subido un 40 % y los vecinos de toda la vida se tienen que ir.'], ['Dueño de hostal', 'No creo que la solución sea prohibir. El turismo da trabajo a mucha gente.'], ['Vecina', 'Ahí te doy la razón, pero el barrio no puede ser solo para turistas.'], ['Joven', 'Yo apoyaría la propuesta siempre que se use el dinero de la tasa turística para vivienda pública.']],
      it: [['총회의 주제는?', '관광세 인상|*구시가지 관광 숙소 제한|주차장 건설'], ['임대료는 얼마나 올랐나요?', '20%|*40%|60%'], ['숙소 주인의 의견은?', '*금지는 해결책이 아니다|당장 금지해야 한다|관심 없다'], ['청년의 조건은?', '숙소를 모두 닫는다|*관광세를 공공 주택에 쓴다|관광객을 줄인다']] },
    { k: 'tf', t: '읽기 — 텅 빈 마을 살리기', text: 'Cada año, cientos de pueblos del interior de España pierden habitantes. Algunos ayuntamientos han decidido actuar: ofrecen casas por un euro, internet de alta velocidad y ayudas para abrir negocios. En opinión de muchos expertos, estas medidas son positivas siempre que vayan acompañadas de servicios básicos, como médicos y escuelas. Otros, en cambio, no creen que el teletrabajo sea suficiente para salvar la España vaciada.',
      it: [['Muchos pueblos del interior pierden habitantes.', true], ['Algunos pueblos ofrecen casas muy baratas.', true], ['Los expertos creen que basta con dar casas.', false], ['Todos creen que el teletrabajo es la solución.', false]] },
    { k: 'order', t: '문장 만들기', it: ['No creo que sea una buena idea.', 'En primer lugar, hay que escuchar a los vecinos.', 'Lo apoyaré siempre que no cueste demasiado.', 'Eso de cerrar el centro no me convence.'] },
    { k: 'dict', t: '받아쓰기', it: ['Desde mi punto de vista, es necesario.', 'No creo que tengan razón.', 'Es impensable que no nos consulten.'] },
    { k: 'write', t: '총회 발언문', d: '「우리 학교 운동장에 주차장을 만든다」는 제안에 대해 찬반 입장을 정하고, 논리 연결어·creo que/no creo que·siempre que를 넣어 발언문을 써 보세요.', model: 'Buenas tardes. En primer lugar, quiero decir que entiendo el problema del aparcamiento. Sin embargo, no creo que la solución sea construir en el patio. En segundo lugar, el patio es el único espacio verde que tenemos y es impensable que los alumnos se queden sin lugar para jugar. Por último, yo aceptaría un aparcamiento siempre que fuera subterráneo y no se cortara ningún árbol. En conclusión, voto en contra de la propuesta actual.' }
  ]
});

AULA.unit({
  n: 5, title: 'Lugares con encanto', ko: '매력 있는 장소 — 우리 도시의 좋아하는 곳',
  goal: '도시 묘사하고 논평하기, 예전 생각과 실제 비교하기, 장소에 대한 긍정·부정 감정 표현하기',
  can: ['관계사 que, quien(es), cuyo/-a', '관계절 속 과거분사 (수동)', '인식·의견 동사 + 직설법/접속법', '도시·여행 묘사 어휘'],
  tags: ['oraciones de relativo', 'cuyo', 'quien', 'participio', 'verbos de percepción', 'ciudades', 'viajes'],
  vocab: [
    { g: '도시의 특징 · Cualidades', w: [['acogedor / acogedora', '아늑한'], ['bullicioso / bulliciosa', '북적이는'], ['cosmopolita', '국제적인'], ['pintoresco / pintoresca', '그림 같은'], ['encantador / encantadora', '매력적인'], ['decadente', '쇠락한 (멋이 있는)'], ['abarrotado / abarrotada', '꽉 찬'], ['emblemático / emblemática', '상징적인'], ['señorial', '품격 있는'], ['caótico / caótica', '혼잡한'], ['con encanto', '매력 있는'], ['de moda', '유행하는']] },
    { g: '도시 공간 · Espacios', w: [['el callejón', '골목'], ['el barrio bohemio', '보헤미안 거리'], ['el mercado de abastos', '재래시장'], ['la azotea', '옥상'], ['el paseo marítimo', '해변 산책로'], ['el rincón', '구석·숨은 장소'], ['la librería de viejo', '헌책방'], ['el local', '가게·업소'], ['el ambiente', '분위기']] },
    { g: '느낌 표현', w: [['me sorprendió que…', '…해서 놀랐다'], ['me decepcionó', '실망했다'], ['me impresionó', '감명받았다'], ['me dejó indiferente', '별 감흥이 없었다'], ['me imaginaba que…', '…라고 상상했다'], ['no me esperaba que…', '…일 줄 몰랐다'], ['resultó ser…', '…인 것으로 드러났다']] }
  ],
  gram: [
    { h: '관계사 que · quien · cuyo', t: [['관계사', '쓰임', '예'], ['que', '사람·사물 (가장 흔함)', 'Es un bar que abrió en 1920.'], ['quien / quienes', '사람 (전치사 뒤, 설명절)', 'El pintor, quien vivió aquí, era famoso.'], ['con quien / a quien', '전치사 + 사람', 'Es la chica con quien viajé.'], ['cuyo / cuya / cuyos / cuyas', '소유 (뒤 명사에 일치)', 'Es un edificio cuya fachada es azul.']] },
    { h: '관계절 속 과거분사 (수동)', ex: [['Es una iglesia construida en el siglo XII.', '12세기에 지어진 교회다.'], ['Visitamos un barrio conocido por su música.', '음악으로 유명한 동네를 방문했다.']] },
    { h: '인식·의견 동사: 긍정 → 직설법 / 부정 → 접속법', t: [['긍정', '부정'], ['Veo que la ciudad ha cambiado.', 'No veo que la ciudad haya cambiado.'], ['Me parece que es caro.', 'No me parece que sea caro.'], ['Noto que hay más turistas.', 'No noto que haya más turistas.']] },
    { h: '예상 vs. 현실', ex: [['Pensaba que era una ciudad fea, pero me encantó.', '못생긴 도시인 줄 알았는데 정말 좋았다.'], ['No me esperaba que hubiera tanta vida nocturna.', '밤 문화가 그렇게 활발할 줄 몰랐다.']] }
  ],
  ex: [
    { k: 'fill', t: 'que · quien · cuyo/-a/-os/-as', it: ['Es una plaza [que] siempre está llena de gente.', 'Es el escritor [cuyas] novelas leímos en clase.', 'La amiga con [quien] viajé es de Quito.', 'Es una ciudad [cuyo] centro histórico es patrimonio de la humanidad.', 'Los vecinos, [quienes] protestaron, consiguieron salvar el mercado.'] },
    { k: 'fill', t: 'cuyo의 성·수 일치', it: ['Es un barrio [cuyas] calles son muy estrechas.', 'Conocí a un artista [cuyo] taller está en el puerto.', 'Es un museo [cuya] colección es enorme.', 'Es una familia [cuyos] hijos estudian en mi colegio.'] },
    { k: 'fill', t: '관계절 과거분사', d: '괄호 속 동사의 과거분사 (성·수 일치)', it: ['Es un palacio [construido] en el siglo XVI. (construir)', 'Visitamos unas casas [pintadas] de colores. (pintar)', 'Es una ciudad [fundada] por los romanos. (fundar)', 'Hay muchos edificios [abandonados]. (abandonar)'] },
    { k: 'fill', t: '직설법? 접속법?', it: ['Veo que hay más carriles bici. → No veo que {hay|*haya} más carriles bici.', 'Me parece que el barrio {*está|esté} más limpio.', 'No creo que este lugar {tiene|*tenga} encanto.', 'Noto que la gente {*es|sea} muy amable aquí.'] },
    { k: 'mc', t: '어떤 형용사?', audio: false, it: [['Un lugar pequeño, cálido y donde te sientes como en casa.', '*acogedor|caótico|abarrotado'], ['Una ciudad con gente de muchos países e idiomas.', 'pintoresca|*cosmopolita|decadente'], ['Una calle con tanta gente que no se puede caminar.', 'señorial|acogedora|*abarrotada'], ['Un pueblo bonito, típico, como de postal.', 'caótico|*pintoresco|bullicioso']] },
    { k: 'tf', t: '읽기 — 내가 좋아하는 장소', text: 'Mi rincón favorito de Buenos Aires es una librería de viejo situada en San Telmo, cuyo dueño, don Aurelio, lleva cuarenta años vendiendo libros. Antes de conocerla, pensaba que era un barrio solo para turistas. Sin embargo, me sorprendió que hubiera tantos vecinos de toda la vida. La librería, que ocupa una antigua casa colonial, tiene un patio interior donde se organizan lecturas de poesía. No me esperaba que un lugar tan pequeño tuviera tanta vida.',
      it: [['La librería está en San Telmo.', true], ['Don Aurelio abrió la librería hace cuatro años.', false], ['Al principio pensaba que el barrio era para turistas.', true], ['La librería está en un edificio moderno.', false], ['En el patio se hacen lecturas de poesía.', true]] },
    { k: 'dlg', t: '듣기 — 여행지 첫인상', listen: 1,
      lines: [['Sergio', '¿Qué tal Valparaíso? ¿Te gustó?'], ['Hana', 'Me encantó. Me imaginaba una ciudad portuaria fea, pero resultó ser preciosa: casas de colores colgadas de los cerros.'], ['Sergio', '¿Y los ascensores antiguos?'], ['Hana', 'Me impresionaron muchísimo. Lo que me decepcionó un poco fue la basura en algunas calles.'], ['Sergio', 'Ya, es una ciudad un poco caótica, pero con mucho encanto.']],
      it: [['Hana는 발파라이소를 처음에 어떻게 상상했나요?', '*못생긴 항구 도시|아주 깨끗한 도시|조용한 마을'], ['Hana가 감명받은 것은?', '쓰레기|*오래된 엘리베이터|해변'], ['Hana가 조금 실망한 것은?', '날씨|*일부 거리의 쓰레기|음식']] },
    { k: 'order', t: '문장 만들기', it: ['Es un barrio cuyas calles son estrechas.', 'Me sorprendió que hubiera tanta gente.', 'Es la amiga con quien viajé a México.', 'Es una iglesia construida en el siglo XII.'] },
    { k: 'dict', t: '받아쓰기', it: ['Es un lugar con mucho encanto.', 'No me esperaba que fuera tan bonito.', 'Es un pueblo cuyo río es famoso.'] },
    { k: 'write', t: '우리 도시의 매력적인 장소', d: '좋아하는 장소 한 곳을 소개하는 글을 써 보세요: 관계사(que, cuyo, quien), 과거분사, 예상과 현실 비교를 넣으세요.', model: 'Mi lugar favorito de Seúl es Ikseon-dong, un barrio de casas tradicionales construidas en los años 30. Antes pensaba que era una zona solo para turistas, pero me sorprendió que fuera tan acogedora. Hay un café cuyo patio está lleno de plantas y una pequeña librería cuya dueña siempre me recomienda novelas. Los callejones, decorados con luces, son encantadores por la noche.' }
  ]
});

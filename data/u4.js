AULA.unit({
  n: 4, title: 'Maneras de vivir', ko: '삶의 방식 — 살고 싶은 낙원 설계',
  goal: '원인과 목적 표현하기, 조언·제안하기, 감정·관계·성격 말하기, 정보 덧붙이기·반박하기',
  can: ['por vs. para', '시제 일치 (관계절)', '연결어: además, es más, en cambio, sin embargo, de hecho…', '전치사를 동반하는 동사'],
  tags: ['por / para', 'correlación de tiempos', 'conectores', 'verbos con preposición', 'relaciones personales', 'tribus urbanas', 'carácter'],
  vocab: [
    { g: '관계·감정 · Relaciones', w: [['llevarse bien / mal con', '~와 사이가 좋다 / 나쁘다'], ['enamorarse de', '~에게 반하다'], ['confiar en', '~을 믿다'], ['contar con', '~에게 의지하다'], ['discutir con', '~와 다투다'], ['echar de menos', '~을 그리워하다'], ['hacer las paces', '화해하다'], ['romper con', '~와 헤어지다'], ['tener celos de', '~을 질투하다'], ['apoyar', '지지하다']] },
    { g: '성격 · Personalidad', w: [['extrovertido / introvertido', '외향적 / 내향적'], ['solidario', '연대 의식이 있는'], ['ambicioso', '야심 있는'], ['conformista', '현실에 안주하는'], ['rebelde', '반항적인'], ['inconformista', '현실에 만족하지 않는'], ['consumista', '소비 지향적인'], ['austero', '검소한'], ['hogareño', '집순이·집돌이의'], ['aventurero', '모험심 강한']] },
    { g: '라이프스타일 · Estilos de vida', w: [['la vida en el campo', '시골 생활'], ['la comunidad autosuficiente', '자급자족 공동체'], ['el nómada digital', '디지털 노마드'], ['el decrecimiento', '탈성장'], ['la tribu urbana', '도시 하위문화 집단'], ['el minimalismo', '미니멀리즘'], ['vivir al día', '그날그날 살다'], ['cambiar de vida', '삶을 바꾸다']] },
    { g: '연결어 · Conectores', w: [['además', '게다가'], ['es más', '더구나'], ['incluso', '심지어'], ['en cambio', '반면에'], ['sin embargo', '그러나'], ['de hecho', '사실'], ['en realidad', '실제로는'], ['al contrario', '오히려']] }
  ],
  gram: [
    { h: 'POR vs. PARA', t: [['por (원인·경로·교환)', 'para (목적·목적지·기한·관점)'], ['Lo hizo por amor.', 'Estudia para ser médico.'], ['Pasamos por el parque.', 'Salgo para Madrid.'], ['Lo compré por 20 euros.', 'Es para el lunes.'], ['Gracias por todo.', 'Para mí, es fácil.']], tip: '**para que + 접속법** (목적, 주어가 다를 때): Te lo digo para que lo sepas.' },
    { h: '관계절과 시제 일치', p: '주절이 과거/조건법 → 관계절의 접속법도 **과거**로.', t: [['현재', '과거·조건법'], ['Busco un lugar donde **haya** paz.', 'Buscaba un lugar donde **hubiera** paz.'], ['Quiero vivir con gente que **piense** como yo.', 'Me gustaría vivir con gente que **pensara** como yo.']] },
    { h: '정보 덧붙이기·반박하기', ex: [['Vivir en el campo es barato; es más, es más sano.', '시골 생활은 싸다. 게다가 더 건강하다.'], ['Dicen que es aburrido. En realidad, hay muchas actividades.', '지루하다고 하지만 실제로는 활동이 많다.']] },
    { h: '전치사를 동반하는 동사', ex: [['Sueño con vivir junto al mar.', '바닷가에 사는 꿈을 꿔.'], ['Me he acostumbrado a madrugar.', '일찍 일어나는 데 익숙해졌어.'], ['Pienso en ti.', '너를 생각해.'], ['Depende de ti.', '너에게 달렸어.']] }
  ],
  ex: [
    { k: 'fill', t: 'por 또는 para', it: ['Trabaja mucho [para] ahorrar dinero.', 'Lo hice [por] ti, porque te quiero.', 'Mañana salgo [para] Barcelona.', 'Paseamos [por] el centro.', 'Este regalo es [para] mi abuela.', 'Muchas gracias [por] tu ayuda.', 'Compré la bici [por] cien euros.', 'Tengo que entregarlo [para] el viernes.'] },
    { k: 'fill', t: 'para + 원형 / para que + 접속법', it: ['Ahorro {*para comprar|para que compre} una casa.', 'Te lo explico {para entender|*para que entiendas} el problema.', 'Vivimos en el campo {*para tener|para que tengamos} más tranquilidad.', 'Hablo despacio {para entender|*para que me entiendan}.'] },
    { k: 'fill', t: '관계절 시제 일치', it: ['Busco una ciudad donde no [haya] tráfico. (haber, 현재)', 'Buscábamos un piso que [tuviera] terraza. (tener, 과거)', 'Me gustaría conocer a alguien que [hablara] guaraní. (hablar)', 'Quiero un trabajo que me [permita] viajar. (permitir, 현재)', 'Necesitaba un compañero que [fuera] ordenado. (ser)'] },
    { k: 'fill', t: '전치사 동사', it: ['Me llevo muy bien [con] mi hermana.', 'Confío [en] mis amigos.', 'Echo [de] menos a mi familia.', 'Sueño [con] vivir en una isla.', 'Mi prima rompió [con] su novio el mes pasado.'] },
    { k: 'mc', t: '알맞은 연결어', audio: false, it: [['Vivir en una gran ciudad es caro. ___, hay mucha contaminación.', '*Además|En cambio|Sin embargo'], ['Mucha gente cree que el campo es aburrido. ___, hay muchísimas actividades.', 'Además|Es más|*En realidad'], ['Mi hermano es muy extrovertido. Mi hermana, ___, es tímida.', 'es más|*en cambio|incluso'], ['No me gusta nada la ciudad; ___, la odio.', 'en cambio|sin embargo|*es más']] },
    { k: 'tf', t: '읽기 — 디지털 노마드의 삶', text: 'Hace tres años, **Rocío** dejó su trabajo en una oficina de Madrid para convertirse en nómada digital. Ahora trabaja como diseñadora desde cualquier lugar con buena conexión: ha vivido en Medellín, en Lisboa y en Bali. «Mucha gente piensa que estoy de vacaciones todo el año. En realidad, trabajo muchas horas», explica. Lo que más echa de menos es a su familia. Además, reconoce que a veces le cuesta hacer amigos porque se muda cada pocos meses.',
      it: [['Rocío trabajaba antes en una oficina.', true], ['Es profesora de idiomas.', false], ['Según ella, trabaja pocas horas.', false], ['Echa de menos a su familia.', true], ['Le resulta fácil hacer amigos.', false]] },
    { k: 'dlg', t: '듣기 — 우리의 낙원 설계', listen: 1,
      lines: [['Lucas', 'Yo diseñaría una comunidad en una isla donde no hubiera dinero.'], ['Marina', '¿Sin dinero? ¿Y cómo se intercambiarían las cosas?'], ['Lucas', 'Cada uno haría un trabajo para que todos tuvieran lo necesario.'], ['Marina', 'Me gusta, pero necesitaríamos médicos. Además, yo quiero que haya internet.'], ['Lucas', 'Vale, internet sí, pero solo dos horas al día. ¡Es más, eso nos haría más felices!']],
      it: [['Lucas의 낙원에 없는 것은?', '인터넷|*돈|의사'], ['모두가 일하는 목적은?', '*모두가 필요한 것을 갖도록|돈을 벌려고|여행하려고'], ['Marina가 원하는 것은?', '돈|*인터넷|섬'], ['인터넷 사용에 대한 Lucas의 조건은?', '무제한|*하루 2시간|주말만']] },
    { k: 'order', t: '문장 만들기', it: ['Me gustaría vivir en un lugar donde hubiera mar.', 'Trabajo para que mis hijos tengan un futuro.', 'Me llevo muy bien con mis vecinos.', 'En realidad, la vida en el campo es divertida.'] },
    { k: 'dict', t: '받아쓰기', it: ['Lo hizo por amor.', 'Buscaba un trabajo que me gustara.', 'Echo de menos a mis abuelos.'] },
    { k: 'write', t: '나의 낙원 설계', d: '이상적인 공동체/장소를 설계해 보세요: 어디에, 어떤 사람들이, 어떤 규칙(para que + 접속법), 연결어(además, en cambio, es más)를 사용하세요.', model: 'Nuestro paraíso estaría en un valle cerca del mar. Viviríamos unas cien personas que se llevaran bien y quisieran cuidar la naturaleza. Cada familia tendría un huerto para que nadie pasara hambre. Además, habría una biblioteca enorme y una escuela al aire libre. En cambio, no habría coches: iríamos en bici. Es más, cada semana haríamos una fiesta para que todos se conocieran.' }
  ]
});

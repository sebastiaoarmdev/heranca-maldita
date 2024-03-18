/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	'stars': {
		'particles': {
			'number': {
				'value': 355,
				'density': {
					'enable': true,
					'value_area': 789.1476416322727
				}
			},
			'color': {
				'value': '#ffffff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': '',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.48927153781200905,
				'random': false,
				'anim': {
					'enable': true,
					'speed': 0.2,
					'opacity_min': 0,
					'sync': false
				}
			},
			'size': {
				'value': 2,
				'random': true,
				'anim': {
					'enable': true,
					'speed': 2,
					'size_min': 0,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 150,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 1
			},
			'move': {
				'enable': true,
				'speed': 0.2,
				'direction': 'none',
				'random': true,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'push'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 1
					}
				},
				'bubble': {
					'distance': 83.91608391608392,
					'size': 1,
					'duration': 3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 200,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'Desenvolvedores': {
		'HTML/CSS/JS/Dall-E': 'Anna Damasceno',
		'HTML/CSS/JS/Monogatari': 'Sebastião Moura'
	},
	'História Original': {
		'': 'Grahal'
	},
	'Música': {
		'The Abandoned Manor': 'Geoff Harvey'
	},
	'Agradecimentos:': {
		'Dall-E': 'Pelas sensacionais imagens',
		'Grahal': 'Pela ótima história original',
		'Hyuchia': 'Pelo excelente Monogatari'
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'the-abandoned-manor': 'the-abandoned-manor-190673.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});


// Define the Characters
monogatari.characters ({
	'Oldman': {
		name: 'Velho',
		color: '#5bcaff'
	},
	'Boy': {
		name: 'Garoto',
		color: '#5bcaff'
	},
	'Chief': {
		name: 'Delegado',
		color: '#5bcaff'
	}
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'00.01.00': '00.01.00.webp',
    '00.02.00': '00.02.00.webp',
    '00.03.00': '00.03.00.webp',
    '00.04.00': '00.04.00.webp',
    '01.01.00': '01.01.00.webp',
    '01.02.00': '01.02.00.webp',
    '01.03.00': '01.03.00.webp',
    '01.04.00': '01.04.00.webp',
    '01.05.00': '01.05.00.webp',
    '02.01.00': '02.01.00.webp',
    '02.02.00': '02.02.00.webp',
    '02.03.00': '02.03.00.webp',
    '02.04.00': '02.04.00.webp',
    '03.01.00': '03.01.00.webp',
    '04.01.00': '04.01.00.webp',
    '04.02.00': '04.02.00.webp',
    '04.03.00': '04.03.00.webp',
    '04.04.00': '04.04.00.webp',
    '04.05.00': '04.05.00.webp',
    '05.01.00': '05.01.00.webp',
    '06.01.00': '06.01.00.webp',
    '06.02.00': '06.02.00.webp',
    '06.03.00': '06.03.00.webp',
    '06.04.00': '06.04.00.webp',
    '06.05.00': '06.05.00.webp',
    '07.01.00': '07.01.00.webp',
    '07.02.00': '07.02.00.webp',
    '07.03.00': '07.03.00.webp',
    '07.04.00': '07.04.00.webp',
    '07.05.00': '07.05.00.webp',
    '08.01.00': '08.01.00.webp',
    '08.02.00': '08.02.00.webp',
    '09.01.00': '09.01.00.webp',
    '10.01.00': '10.01.00.webp',
    '10.02.00': '10.02.00.webp',
    '10.03.00': '10.03.00.webp',
    '10.04.00': '10.04.00.webp',
    '11.01.00': '11.01.00.webp',
    '12.01.00': '12.01.00.webp',
    '13.01.00': '13.01.00.webp',
    '13.02.00': '13.02.00.webp',
    '14.01.00': '14.01.00.webp',
    '14.02.00': '14.02.00.webp',
    '14.03.00': '14.03.00.webp',
    '15.01.00': '15.01.00.webp',
    '15.02.00': '15.02.00.webp',
    '16.01.00': '16.01.00.webp',
    '16.02.00': '16.02.00.webp',
    '17.01.00': '17.01.00.webp',
    '18.01.00': '18.01.00.webp',
    '18.02.00': '18.02.00.webp',
    '19.01.00': '19.01.00.webp',
    '19.02.00': '19.02.00.webp',
    '20.01.00': '20.01.00.webp',
    '21.01.00': '21.01.00.webp',
    '21.02.00': '21.02.00.webp',
    '22.01.00': '22.01.00.webp',
    '23.01.00': '23.01.00.webp',
    '23.02.00': '23.02.00.webp',
    '23.03.00': '23.03.00.webp',
    '24.01.00': '24.01.00.webp',
    '24.02.00': '24.02.00.webp',
    '25.01.00': '25.01.00.webp',
    '25.02.00': '25.02.00.webp',
    '26.01.00': '26.01.00.webp',
    '27.01.00': '27.01.00.webp',
    '28.01.00': '28.01.00.webp',
    '28.02.00': '28.02.00.webp',
    '29.01.01': '29.01.01.webp',
    '29.02.00': '29.02.00.webp',
    '29.03.00': '29.03.00.webp',
    '29.04.00': '29.04.00.webp',
    '29.05.00': '29.05.00.webp',
    '30.01.00': '30.01.00.webp',
    '31.01.00': '31.01.00.webp',
    '31.02.00': '31.02.00.webp',
    '31.03.00': '31.03.00.webp',
    '31.04.00': '31.04.00.webp',
    '31.05.00': '31.05.00.webp',
    '31.06.00': '31.06.00.webp',
    '33.01.00': '33.01.00.webp',
    '33.02.00': '33.02.00.webp',
    '34.01.00': '34.01.00.webp',
    '34.02.00': '34.02.00.webp',
    '35.01.00': '35.01.00.webp',
    '35.02.00': '35.02.00.webp',
    '36.01.00': '36.01.00.webp',
    '36.02.00': '36.02.00.webp',
    '37.01.00': '37.01.00.webp',
    '37.02.00': '37.02.00.webp',
    '37.03.00': '37.03.00.webp',
    '37.04.00': '37.04.00.webp',
    '38.01.00': '38.01.00.webp',
    '38.02.00': '38.02.00.webp',
    '39.01.00': '39.01.00.webp',
    '39.02.00': '39.02.00.webp',
    '39.03.00': '39.03.00.webp',
    '40.01.00': '40.01.00.webp',
    '40.02.00': '40.02.00.webp',
    '40.03.00': '40.03.00.webp',
    '40.04.00': '40.04.00.webp',
    '40.05.00': '40.05.00.webp'
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music the-abandoned-manor with loop fade 4 volume 4',
		'show particles stars',
		'show scene #000000 with fadeIn',
		'Você é Carlos Alexandre Bueno, funcionário público, trabalha em um banco, não tem muitos amigos e nem visita os parentes com frequência, sendo que seus pais faleceram no último ano.',
		'show scene 00.01.00 with fadeIn',
		'É com surpresa, portanto, que recebe uma carta informando que está prestes a receber uma herança.',
		'Você deverá comparecer ao escritório do advogado antes do próximo sábado para acertar os detalhes da herança deixada por Silvio Schatner.',
		'O nome não lhe parece completamente estranho...',
		'show scene 00.02.00 with fadeIn',
		'Você acaba lembrando-se de sua infância, quando às vezes seus recebiam a visita de um tio esquisito, que contava histórias sobre \'coisas inexplicáveis\', religiões antigas e culturas bizarras.',
		'Essas histórias davam-lhe arrepios e por muitas vezes não conseguia dormir, mas gostava de ouvi-las.',
		'Há muito tempo não ouviu falar em Silvio e não fosse por esta carta, dificilmente iria se recordar dele. Estranho... Não eram parentes próximos.',
		'show scene #000000 with fadeIn',
		'Por que Silvo lhe deixaria uma herança?',
		'Seria realmente o mesmo Silvio que conheceu?',
		'Curioso, você decide ver o advogado.',
		'show scene 00.03.00 with fadeIn',
		'No escritório o advogado confirma suas lembranças mostrando fotos que eram realmente do estranho tio Silvio.',
		'Você fica sabendo também que pouco antes de morrer, Silvio achava-se internado em um sanatório, mas o testamento foi escrito anos antes, quando ainda estava são, e, portanto, é válido.',
		'show scene 00.04.00 with fadeIn',
		'Mais curioso ainda era que a leitura do testamento deveria ser feita na antiga casa de Silvio, em uma cidadezinha do interior chamada Guardudo, às 23h00 do próximo sábado.',
		'show scene #000000 with fadeIn',
		'jump 1'
	],
	'1': [
		'show scene #000000 with fadeIn',
		'Você decide ir à leitura do testamento, curioso como as condições e também para saber o que Silvio teria lhe deixado. Sábado, logo após o almoço, você ruma para o escritório do advogado.',
		'show scene 01.01.00 with fadeIn',
		'Chegando lá o encontra à sua espera, bem como outros dois herdeiros: um homem e uma mulher.',
		'Nenhum deles é familiar.',
		'Mais tarde você descobre tratar-se de Boris, um antigo colega de faculdade de Silvio, e Kátia, outra parente distante que também não via há anos.',
		'show scene 01.02.00 with fadeIn',
		'Foram todos no carro do advogado. A viagem para Guardudo leva algumas horas; talvez não demorasse tanto se não errassem o caminho duas vezes.',
		'show scene 01.03.00 with fadeIn',
		'Afinal, não havia placa alguma indicando a pequena estrada de terra que leva até a cidade.',
		'show scene 01.04.00 with fadeIn',
		'Guardudo parece uma cidade saída do começo do século 20, cercada por uma imensa mata virgem. A população talvez não chegasse a mil habitantes...',
		'E as poucas pessoas nas ruas trajam roupas extremamente fora de época, literais peças de museu.',
		'Na rua principal, de onde podem ser vistas as fronteiras norte e sul de Guardudo com um simples giro de cabeça, vocês decidem informar-se sobre a localização da casa de Silvio.',
		'Como viaja no banco da frente, você desce do carro para pedir a informação.',
		'show scene 01.05.00 with fadeIn',
		'Há apenas duas pessoas por perto, um senhor de idade sentado nos degraus de entrada de uma casa e um garotinho brincando na rua.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'perguntar ao velho': {
					'Text': 'Perguntar ao velho',
					'Do': 'jump 27'
				},
				'perguntar ao garoto': {
					'Text': 'Perguntar ao garoto',
					'Do': 'jump 9'
				}
			}
		}
	],
	'2': [
		'show scene #000000 with fadeIn',
		'Você não pretende confiar nas leis desta cidade de loucos.',
		'show scene 02.01.00 with fadeIn',
		'Caminha na direção da saída e, quando o guarda segura seu braço para detê-lo, o nervosismo faz com que você o derrube com um soco no estômago.',
		'show scene 02.02.00 with fadeIn',
		'O delegado puxa a arma, dando-lhe a certeza de que você está lidando com lunáticos.',
		'show scene 02.03.00 with fadeIn',
		'Felizmente consegue chegar até o carro e dirigir de volta para à casa.',
		'Para sua surpresa, ninguém o segue.',
		'show scene 02.04.00 with fadeIn',
		'Chegando lá, você descobre que Boris não está. Foi à cidade para descobrir o que estava acontecendo.',
		'Depois de ouvir o que aconteceu, o advogado pede calma a todos e sugere que esperem pela volta de Boris antes de tomar qualquer atitude.',
		'jump 31'
	],
	'3': [
		'show scene 03.01.00 with fadeIn',
		'Você se atraca com a mulher e começam uma luta feroz. Ela é muito mais forte do que parece. Você não consegue deter suas mãos quando elas se fecham em volta de seu pescoço.',
		'Seus olhos enchem-se de sangue e em poucos instantes o ar não chega mais a seus pulmões.',
		'Pouco depois, você não precisa mais de ar: mortos não respiram.',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'4': [
		'show scene 04.01.00 with fadeIn',
		'Você abre a porta do porão e desce cuidadosamente, com cuidado para que a vela não apague. Chegando lá embaixo, nota que tudo a volta parece destruído.',
		'show scene 04.02.00 with fadeIn',
		'Aquele que deve ser o prisioneiro vem em sua direção.',
		'Quem o teria trancado aqui?',
		'O homem usa roupas rasgadas e apodrecidas, que exalam um forte cheiro de carniça. A aparência dele parece estranha sob a luz da vela.',
		'show scene 04.03.00 with fadeIn',
		'Seus olhos estão perdidos no vazio e sua pele é muito pálida.',
		'show scene 04.04.00 with fadeIn',
		'Quando se prepara para falar com ele, uma mão veloz fecha-se à volta de seu pescoço e começa a apertar.',
		'Você está tão surpreso que não consegue reagir.',
		'Sua garganta é esmagada.',
		'show scene 04.05.00 with fadeIn',
		'Sua última visão antes que a vela caia são aqueles olhos esbranquiçados, fixos, desejosos de morte...',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'5': [
		'show scene #000000 with fadeIn',
		'A madeira parece uma boa arma. Você segura-a e bate com força nas costas da mulher, ms ela nem parece se incomodar.',
		'show scene 05.01.00 with fadeIn',
		'A mulher continua despedaçando a garganta do advogado como se as violentas pauladas em seu dorso não fossem nada.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'fogo': {
					'Text': 'Atacar a mulher com fogo do lampião',
					'Do': 'jump 15'
				},
				'agarrar': {
					'Text': 'Agarrar a mulher para tentar afastá-la do advogado',
					'Do': 'jump 3'
				},
				'fugir': {
					'Text': 'Fugir',
					'Do': 'jump 12'
				}
			}
		}
	],
	'6': [
		'show scene #000000 with fadeIn',
		'Você resolve acabar de vez com o mal que assola está região, antes que ele se espalhe.',
		'show scene 06.01.00 with fadeIn',
		'Coloca o medalhão no pescoço, pega os potes, os papéis e segue na direção da floresta.',
		'show scene 06.02.00 wurh fadeIn',
		'Seguindo as indicações de Silvio, você encontra uma trilha que não parece usada há anos.',
		'show scene 06.03.00 with fadeIn',
		'Entrando na trilha você percebe uma luminosidade azul irradiando do medalhão. Ao mesmo tempo sente uma opressão indefinida, uma sensação de horror.',
		'As árvores parecem se fechar à sua volta mas se afastam quando você avança. Quanto mais você penetra na floresta, mais intensamente brilha o medalhão e maior é a sensação de que os galhos tentam agará-lo.',
		'show scene 06.04.00 with fadeIn',
		'Ao final da trilha você encontra uma grande pedra negra. No centro dela há um buraco de onde sai labaredas. É o local onde se deve realizar o ritual.',
		'show scene 06.05.00 with fadeIn',
		'Você lê as instruções mas parte delas está borrada pelo tempo e, apesar da lua cheia, a luz é fraca demais para garantir uma boa leitura. Apesar disso, você acha que ainda e possível realizar o ritual.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'tentar': {
					'Text': 'Tentar',
					'Do': 'jump 26'
				},
				'ir embora': {
					'Text': 'Ir embora',
					'Do': 'jump 24'
				}
			}
		}
	],
	'7': [
		'show scene 07.01.00 with fadeIn',
		'Dentro do quarto você se sente mais seguro. Parece uma antiga biblioteca, mas os livros estão todos podres e espalhados pelo chão.',
		'show scene 07.02.00 with fadeIn',
		'Enquanto seus nervos recuperam-se do susto e você pondera sobre o que fazer, algo chama sua atenção do lado de fora da casa.',
		'show scene 07.03.00 with fadeIn',
		'Abaixo da colina, andando pela estrada e portando tochas, muitas pessoas caminham em procissão. Vestem túnicas e cantam em uma língua que soa como latim ou coisa parecida.',
		'Pela quantidade de pessoas, toda a população da cidade deve estar ali. Observando mais atentamente você percebe que estão levando um estandarte.',
		'show scene 07.04.00 with fadeIn',
		'Mas, em vez de bandeira, o mastro traz o que parece ser um corpo humano!',
		'show scene 07.05.00 with fadeIn',
		'A procissão segue e penetra na floresta perto da encosta da colina.',
		'Será que Silvio estava certo? Estariam eles indo à tumba onde as anotações sobre o ritual estão escondidas? Ou essa tumba estaria no cemitério da cidade?',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'seguir a procissão': {
					'Text': 'Seguir a procissão',
					'Do': 'jump 10'
				},
				'ficar': {
					'Text': 'Ficar na casa e procurar por Kátia',
					'Do': 'jump 22'
				},
				'ir à cidade': {
					'Text': 'Ir à cidade',
					'Do': 'jump 17'
				}
			}
		}
	],
	'8': [
		'show scene 08.01.00 with fadeIn',
		'Para evitar um encontro com outros daqueles seres malditos, você sai pela janela disposto a fugir pela cidade, mas, depois de uma rápida olhada, percebe que o carro sumiu. Terá que ir a pé.',
		'show scene 08.02.00 with fadeIn',
		'Pulando de sombra em sombra você consegue chegar à cidade sem ser notado. Avista um grupo de pessoas conversando na rua. Nenhuma delas viu você ou não lhe dão atenção.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'falar': {
					'Text': 'Falar com eles',
					'Do': 'jump 39'
				},
				'procurar um carro': {
					'Text': 'Procurar um carro pra sair da cidade',
					'Do': 'jump 19'
				},
				'procurar pelo cemitério': {
					'Text': 'Procurar pelo cemitério',
					'Do': 'jump 29'
				}
			}
		}
	],
	'9': [
		'show scene #000000 with fadeIn',
		'A criança não parece ligar para sua aproximação e continua como que estava fazendo.',
		'show scene 09.01.00 with fadeIn',
		'Chegando mais perto você percebe que o moleque está enterrando um rato vivo, deixando apenas a cabeça para fora.',
		'Ele diz que não sabe nada sobre nenhum Silvio, mas você lembra-se que o advogado mencionou "a casa da colina" e pergunta sobre ela.',
		'Boy A casa da colina eu sei onde é.',
		'Boy É a casa do homem mau.',
		'Boy Ele ia acabar com todo mundo, mas papai deu um jeito nele e ele foi embora.',
		'Boy Você é um homem mau?',
		'show scene #000000 with fadeIn',
		'Depois de algum trabalho para convencer o garoto de que você não é um "homi mau", ele indica o caminho até a casa.',
		'Você agradece e reflete sobre a imaginação fértil das crianças - e suas brincadeiras estranhas...',
		'jump 37'
	],
	'10': [
		'show scene 10.01.00 with fadeIn',
		'Sorrateiramente você sai pela janela e parte na direção da mata. É fácil achar o caminho que tomaram, pois há uma grande trilha aberta.',
		'Logo você começa a escutar os cânticos novamente e chega a uma clareira. Para sua surpresa, todos estão em volta do grande mastro que você viu e a pessoa morta espetada nele é Boris!',
		'show scene 10.02.00 with fadeIn',
		'O pânico domina seu corpo e você se vira para fugir. Quando está prestes a disparar em corrida, choca-se com uma árvore.',
		'show scene 10.03.00 with fadeIn',
		'Estranho, não parecia estar ali antes.',
		'Tenta dar a volta, mas acaba enroscando-se em um punhado de cipós. Parece loucura, coisa de pesadelo, mas quanto mais você se debate mais os cipós apertam.',
		'Você finalmente se dá conta de que não é apenas seu pânico: os cipós estão realmente o amarrando.',
		'show scene 10.4.00 with fadeIn',
		'Quando está totalmente preso, sem conseguir mover um músculo, a última coisa que você vê em vida é uma monstruosa e enorme abertura parecida com uma boca se abrindo no tronco da árvore...',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'11': [
		'show scene 11.01.00 with fadeIn',
		'Você se lembra do testamento, que mencionava algo sobre uma criatura presa no porão. Não acreditou a princípio, mas agora a idéia já não parece tão absurda.',
		'Você evita o porão, entra no quarto e tranca a porta por dentro.',
		'Depois de algum tempo não há mais barulho lá fora. Talvez aquele monstro tenha ido embora.',
		'jump 7'
	],
	'12': [
		'show scene #000000 with fadeIn',
		'Temendo que as histórias de Silvio sejam reais, você decide fugir. Mas o lampião ficou na entrada, e você se encontra na mais completa escuridão.',
		'show scene 12.01.00 with fadeIn',
		'Ultrapassa, sem perceber, a escada que leva ao andar de cima. Meio tateando e meio tropeçando, encontra a porta de um quarto e a escada que desce até o porão.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'entrar no quarto': {
					'Text': 'Entrar no quarto e se trancar lá dentro',
					'Do': 'jump 11'
				},
				'ir para o porão': {
					'Text': 'Ir para o porão',
					'Do': 'jump 35'
				}
			}
		}
	],
	'13': [
		'show scene 13.01.00 with fadeIn',
		'Resignado, você aceita ficar na cela. Deita-se na cama estreita e fica esperando para ver o que acontece.',
		'Com o tempo, acostuma-se ao silêncio, e consegue ouvir a conversa distante entre o guarda e o delegado. Não pode distinguir muita coisa, apenas algumas palavras...',
		'<em>o forasteiro... sacrifício... deus-árvore...</em>',
		'Nada que deixe você mais tranquilo.',
		'show scene 13.02.00 with fadeIn',
		'Quando acaba de roer todas as suas unhas, você arrisca uma espiada fora da cela. O delegado não está, e o guarda cochila em uma cadeira logo ao lado. A chave é bem visível em seu bolso.',
		'Você poderia pegá-la, mas, se falhar, certamente vai acordá-lo.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'pegar': {
					'Text': 'Pegar a chave',
					'Do': 'jump 38'
				},
				'esperar': {
					'Text': 'Esperar mais',
					'Do': 'jump 23'
				}
			}
		}
	],
	'14': [
		'show scene #000000 with fadeIn',
		'Essa cidade é louca! Que se dane a herança!',
		'show scene 14.01.00 with fadeIn',
		'Você decide que não vai ficar aqui nem mais um minuto, e liga o carro. Essa gente quer matá-lo, e dinheiro nenhum no mundo vale isso.',
		'show scene 14.02.00 with fadeIn',
		'Quando passa, as pessoas tentam pará-lo. Algumas se jogam contra o carro.',
		'show scene 14.03.00 with fadeIn',
		'O pânico faz com que você pise fundo no acelerador, sumindo na estrada de terra que sai da cidade, mesmo sem certeza de que atropelou alguém ou não.',
		'jump 33'
	],
	'15': [
		'show scene #000000 with fadeIn',
		'Você imagina que existe alguma verdade no bilhete de Silvio. Agarra o lampião e atira contra a mulher. O querosene se espalha e transforma-a em uma tocha humana.',
		'show scene 15.01.00 with fadeIn',
		'Um grito hediondo escapa de usa garganta. Ela queima como papel amassado, muito mais rápido do que um ser humano normal queimaria. Em poucos segundos está reduzida a pó.',
		'É tarde para salvar o advogado. Ele está morto.',
		'show scene 10.02.00 with fadeIn',
		'Chocado com a cena funesta, você cambaleia sem rumo até entrar em um quarto.',
		'jump 7'
	],
	'16': [
		'show scene 16.01.00 with fadeIn',
		'Você atira o medalhão contra uma pedra, fazendo-o em pedaços, rezando para que isso complete o ritual. Olha em volta e respira aliviado quando percebe que a agonia da floresta parece terminada.',
		'Os espíritos foram embora.',
		'show scene 16.02.00 with fadeIn',
		'Ou talvez não, você pensa quando vê um galho mover-se. O pânico apodera-se de seu corpo enquanto as árvores arrastam-se em sua direção.',
		'Os demônios ainda estão ali! Você tenta gritar, mas os cipós enroscam-se em seu pescoço e sufocam seus gritos, enquanto é arrastado na direção da enorme abertura que parece uma boca no tronco de uma árvore.',
		'Seus lamentos jamais serão ouvidos novamente por alguém deste mundo...',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'17': [
		'show scene 17.01.00 with fadeIn',
		'Você decide que é melhor ir para a cidade quando nota algumas pessoas abandonando a mata. Elas espalham-se em diversas direções, andando de forma capenga, e parecem estar procurando alguma coisa... ou alguém!',
		'Algumas aproximam-se da casa e é melhor você sair daqui antes que cheguem.',
		'jump 8'
	],
	'18': [
		'show scene 18.01.00 with fadeIn',
		'Você corre pela casa, chamando por Kátia e Boris. Quase desesperado, cruzando os corredores aos berros, vê alguém saindo de um dos quartos. A onda de alívio que o envolve não dura muito...',
		'É uma mulher, nua, inteiramente banhada em sangue.',
		'show scene 18.02.00 with fadeIn',
		'Ela avança em sua direção e agarra sua garganta com uma força incrível. Você tenta soltar-se, mas é como lutar com uma estátua sólida.',
		'Não consegue fazer nada quando ela começa a arrancar pedaços seus com mordidas selvagens.',
		'Não há mais escapatória. É o seu fim.',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'

	],
	'19': [
		'show scene 19.01.00 with fadeIn',
		'Você decide que é melhor procurar um carro para fugir dessa cidade de loucos o quanto antes.',
		'Essas pessoas provavelmente são tão insanas quanto aquelas que participavam da procissão e não parece boa ideia expor-se assim.',
		'show scene 19.02.00 with fadeIn',
		'Você vasculha a cidade e acaba encontrando o carro do advogado diante da delegacia. As luzes da delegacia estão acesas, mas não há ninguém na rua.',
		'jump 36'
	],
	'20': [
		'show scene #000000 with fadeIn',
		'Você decide que é melhor não participar do plano de Sílvio. Mesmo que ele esteja certo, a melhor coisa a fazer é escapar daqui.',
		'Você guarda tudo o que pegou e sai do cemitério em busca de um carro que possa usar para sair da cidade.',
		'show scene 20.01.00 with fadeIn',
		'Chegado a rua principal você encontra o carro do advogado estacionado diante da delegacia.',
		'jump 36'
	],
	'21': [
		'show scene #000000 with fadeIn',
		'É melhor que você os acompanhe. Se ninguém fizer isso, eles não os deixarão em paz. Você pega as chaves do carro do advogado e segue-os até a cidade.',
		'show scene 21.01.00 with fadeIn',
		'Vocês estacionam diante da delegacia e entram. A atitude dos dois fica ainda pior: eles dizem que você desacatou as leis locais e deverá ficar detido até o dia de seu julgamento.',
		'show scene 21.02.00 with fadeIn',
		'Você protesta, alegando que tudo isso é inconstitucional, mas, antes mesmo que você termine essa palavra, um dos guardas abre a porta de uma cela e ordena que entre.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'fugir': {
					'Text': 'Tentar fugir desses loucos e voltar a casa',
					'Do': 'jump 2'
				},
				'aguardar': {
					'Text': 'Aguardar para ver até onde chega essa palhaçada',
					'Do': 'jump 13'
				}
			}
		}
	],
	'22': [
		'show scene #000000 with fadeIn',
		'Você decide que vai continuar na casa e procurar por Kátia, que deve estar mais apavorada que você (ainda que isso pareça difícil). Tenta deduzir para onde ela teria ido mas não consegue.',
		'show scene 22.01.00 with fadeIn',
		'Minutos depois, ao passar pela janela, você percebe várias figuras abandonando a mata. Elas têm o mesmo andar desengonçado da mulher que matou o advogado e emitem horríveis sons inumanos.',
		'Algumas delas estão vindo na direção da casa e continuar aqui já não parece uma ideia tão boa.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'floresta': {
					'Text': 'Ir à floresta investigar a estranha procissão',
					'Do': 'jump 10'
				},
				'cidade': {
					'Text': 'Ir à cidade',
					'Do': 'jump 8'
				}
			}
		}
	],
	'23': [
		'show scene 23.01.00 with fadeIn',
		'Você aguarda na cela até pouco antes da meia noite, conformado com a ideia de que perderá a leitura do testamento. Quando já começava a dormir, é acordado pelo som de cânticos estranhos:',
		'<em>Alimento para o deus-árvore... Alimento para o deus-árvore...</em>',
		'show scene 23.02.00 with fadeIn',
		'Uma pequena multidão entra na delegacia. Todos usam mantos negros e seguram facas. O guarda desperta e pula da cadeira, mas em vez de enfrentar os estranhos...',
		'tudo o que ele faz é destrancar a porta da cela.',
		'show scene 23.03.00 with fadeIn',
		'As pessoas de manto entram com suas facas.',
		'Você se desespera e tenta reagir...',
		'Eles são muitos...',
		'Quando a primeira lâmina penetra em seu corpo...',
		'Você percebe que é o fim.',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'24': [
		'show scene #000000 with fadeIn',
		'Depois de tudo que aconteceu você pensa que não quer correr mais riscos.',
		'show scene 24.01.00 with fadeIn',
		'O medalhão parece ser a única coisa que o protege nesse lugar maldito e, como dizia a carta, se o ritual falhar a proteção do medalhão termina.',
		'show scene 24.02.00 with fadeIn',
		'Você tenta encontrar a trilha para retornar a cidade, mas não vê nada. É como se a mata houvesse crescido de novo, em poucos instantes.',
		'Se os espíritos realmente controlam a vegetação, você poderia vagar durante dias sem encontrar coisa alguma. Pelo jeito, sua única esperança agora é completar o ritual.',
		'jump 26'
	],
	'25': [
		'show scene 25.01.00 with fadeIn',
		'Chegando à casa, você acha estranho quando encontra a porta aberta. Derrubada, na verdade.',
		'show scene 25.02.00 with fadeIn',
		'Corre para o escritório e cai de joelhos quando encontra o corpo mutilado do advogado.',
		'Feito em pedaços!',
		'Aqueles loucos da cidade devem ter feito isso!',
		'Onde estão os outros? Talvez ainda estejam na casa.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'procurar': {
					'Text': 'Procurá-los',
					'Do': 'jump 18'
				},
				'voltar': {
					'Text': 'Voltar para o carro e escapar deste pesadelo',
					'Do': 'jump 33'
				}
			}
		}
	],
	'26': [
		'show scene 26.01.00 with fadeIn',
		'Você começa a realizar o ritual seguindo as instruções dos papéis. Faz movimentos estranhos com as mãos, pronuncia palavras sem sentido... coisas que acharia absurdas em outra situação.',
		'Com o avanço do ritual, a floresta começa a agir de forma estranha. Arbustos farfalham com força, galhos entram em convulsão. A vegetação parece em desespero contra o ritual que está sendo realizado.',
		'Tudo corre bem até perto do final que está quase ilegível. Pelo que você pode perceber, falta a parte que fala sobre a destruição do medalhão. Você não sabe exatamente como ela deve ser feita.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'quebrar': {
					'Text': 'Quebrar o medalhão',
					'Do': 'jump 16'
				},
				'jogar': {
					'Text': 'Jogá-lo no buraco flamejante',
					'Do': 'jump 40'
				}
			}
		}
	],
	'27': [
		'show scene #000000 with fadeIn',
		'Por ser uma cidade pequena, o velho senhor deve ter conhecido Silvio, e provavelmente sabe onde fica sua casa.',
		'show scene 27.01.00 with fadeIn',
		'Ele olha de maneira estranha quando você se aproxima; um olhar fixo que de alguma maneira faz você gelar.',
		'Oldman A casa de Silvio?',
		'show scene #000000 with fadeIn',
		'O velho resmunga e dá uma longa pausa.',
		'show scene 27.01.00 with fadeIn',
		'Oldman Você está vendo aquela colina no fim da rua?',
		'Oldman A casa fica lá em cima, mas vou logo avisando, aqui é um lugar mal assombrado.',
		'Oldman Se vocês ficarem, podem nunca mais voltar pra cidade grande.',
		'Oldman É, pode nunca mais voltar...',
		'Oldman He, he, he...',
		'show scene #000000 with fadeIn',
		'Você se afasta, enquanto o velho prossegue com sua risada histérica. Melhor ficar longe desse maluco e suas crendices idiotas.',
		'jump 37'
	],
	'28': [
		'show scene 28.01.00 with fadeIn',
		'Levando uma vela você decide dar uma espiada na casa, que poderá vir a ser sua herança.',
		'É uma grande mansão, mas parece velha e acabada. Se alguém quiser viver nela deverá pensar em uma boa reforma.',
		'Quando você prepara-se para subir até o andar de cima, escuta alguma coisa.',
		'show scene 28.02.00 with fadeIn',
		'O som vem de uma pequena porta sob a escada. Prestando mais atenção, você percebe que alguém está quebrando alguma coisa lá embaixo.',
		'Alguém está trancado no porão?',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'abrir a porta e ir ao porão': {
					'Text': 'Abrir a porta e ir ao porão',
					'Do': 'jump 4'
				},
				'voltar e esperar': {
					'Text': 'Voltar ao escritório e esperar pela leitura do testamento',
					'Do': 'jump 30'
				}
			}
		}
	],
	'29': [
		'show scene #000000 with fadeIn',
		'No princípio não parecia possível acreditar nas histórias de Silvio, mas como continuar incrédulo depois desses acontecimentos?',
		'show scene 29.01.00 with fadeIn',
		'O testamento dizia que as instruções para expulsar os demônios estão no túmulo do tal João Sebastião Ferreira. O cemitério da cidade pode ser visto ao longe.',
		'Você pula a janela e, rezando para não ser visto por nenhum daqueles loucos, chega até lá. Consegue pular o muro com certa facilidade. Você começa a procurar pelo túmulo correto.',
		'show scene 29.02.00 with fadeIn',
		'Olhando para as tumbas, um arrepio começa a percorrer seu corpo: todas estão abertas e vazias! Você não encontra nenhuma tumba com o nome João Sebastião Ferreira.',
		'Talvez ele esteja enterrado no mausoléu no centro do cemitério, mas mesmo assim é fácil supor que seu túmulo esteja aberto como todos os outros.',
		'show scene 29.03.00 with fadeIn',
		'Entrando no mausoléu você sente um cheiro fétido, próprio de lugares fechados há anos. Logo você percebe a engenhosidade de Silvio: este lugar era reservado apenas a cinzas de corpos cremados.',
		'Como podia haver crematório em uma cidade deste tamanho? Você não faz nenhuma ideia.',
		'Ladrões de cemitério não se interessariam por cinzas e qual o melhor lugar para esconder algo deles senão bem debaixo de suas barbas?',
		'show scene 29.04.00 with fadeIn',
		'Você acende algumas velas e, rapidamente, encontra a urna que guarda as cinzas de João. Dentro, além das cinzas, estão o medalhão, dois frascos e alguns papéis em estado péssimo.',
		'Com muito cuidado para não estragar os papéis, você começa a lê-los:',
		'show scene #ffffff with fadeIn',
		'centered Se você está lendo é porque consegui alguém para fazer aquilo que eu mesmo não tive coragem de executar.',
		'centered As pessoas da cidade são insanas e seus rituais macabros parecem persistir por várias gerações. Os loucos acreditam em deuses-árvores e oferecem sacrifícios a eles em troca da vida eterna.',
		'centered De certo modo seus mortos realmente se levantam da morte, mas como seres sem vida e sem mente, com sede de sangue: longe de ser uma pessoa com vida eterna...',
		'centered Depois de muitos estudos consegui achar um ritual para esconjurar os espíritos horrendos que se apossam da floresta.',
		'centered O medalhão irá proteger o portador contra eles, mas ao final do ritual, a peça deverá ser destruída. se o ritual não for executado corretamente, o medalhão também se tornará inútil.',
		'centered As instruções para executar o ritual estão anexadas a esta carta e você pode ser a última esperança de expulsar esses seres antes que eles espalhem a sua influência a lugares mais distantes.',
		'show scene 29.05.00 with fadeIn',
		'A carta aponta ainda o local onde o ritual deve ser realizado: bem no meio da floresta.',
		'Ei, é onde os loucos estão reunidos!',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'ritual': {
					'Text': 'Arriscar-se a ir à floresta para realizar o ritual',
					'Do': 'jump 6'
				},
				'fugir': {
					'Text': 'Fugir da cidade',
					'Do': 'jump 20'
				}
			}
		}
	],
	'30': [
		'show scene #000000 with fadeIn',
		'Você espera pacientemente no escritório pela leitura do testamento. Está conversando com o advogado para passar o tempo, até que alguém bate à porta. Vocês vão ver quem é.',
		'show scene 30.01.00 with fadeIn',
		'Dois homens, um deles trajado como policial, apresentam-se como o prefeito e o delegado de Guardudo. Dizem que vocês não poderiam estar nesta casa sem permissão do Conselho Municipal.',
		'O advogado explica sobre o testamento, mas eles não parecem se importar.',
		'Chief Só há uma maneira de acertar tudo...',
		'Chief Um de vocês deve ir à delegacia para explicar tudinho. Caso contrário, não podem ficar aqui.',
		'Você acha tudo isso um absurdo. Não importa que sejam eles, não têm direito nenhum de dizer se vocês podem ou não ficar na cidade, mas parece que não vão deixá-los em paz se alguém não for com eles.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'Acompanhá-los': {
					'Text': 'Acompanhá-los',
					'Do': 'jump 21'
				},
				'Ficar': {
					'Text': 'Ficar na casa',
					'Do': 'jump 32'
				}
			}
		}
	],
	'31': [
		'show scene 31.01.00 with fadeIn',
		'O tempo passa vagaroso, e finalmente chega a hora. Boris não retornou, mas não é possível esperar por ele. O testamento deve ser lido agora.',
		'show scene 31.02.00 with fadeIn',
		'O advogado abre o envelope lacrado e começa a leitura em voz alta. No documento, Silvio diz que sempre foi um incansável admirador do desconhecido.',
		'Suas pesquisas trouxeram-no até esta pequena cidade. Comprou uma casa no alto de uma colina e começou a investigar as redondezas.',
		'Descobriu que um grande mal rondava por aqui, criaturas hediondas escondiam-se nas matas. Teriam sido invocadas por um ritual profano, séculos atrás.',
		'show scene 31.03.00 with fadeIn',
		'Silvio encontrou, em livros antigos, um feitiço capaz de expulsar as criaturas demoníacas que habitavam estas matas...',
		'Mas descobriu, apenas tarde demais, que os habitantes da cidade eram aliados das entidades malignas. Acreditavam que servindo aos monstros, seriam recompensadas com poder e vida eterna.',
		'show scene 31.04.00 with fadeIn',
		'Estavam enganadas. Os mortos da cidade realmente voltavam do túmulo, mas como zumbis sem mente e provavelmente sem alma. Isso seria vida?',
		'O testamento diz ainda que Silvio conseguiu prender um desses mortos-vivos em seu porão. É muito perigoso, de modo que o melhor é deixa-lo lá.',
		'Diz ainda que suas anotações estão escondidas no túmulo de João Sebastião Ferreira e que sua herança é composta de dois apartamentos no Rio de Janeiro, esta casa e R$ 200.000,00.',
		'Tudo será divido entre os herdeiros que conseguirem executar o ritual de esconjuração dos demônios.',
		'O advogado mostra ainda um bilhete que deveria ser entregue aos herdeiros, mas ele foi escrito quando Silvio já estava internado no sanatório:',
		'show scene #ffffff with fadeIn',
		'centered <strong><em>Morto-vivo<br>* Ser maldito - FogoFogoFogo<br>um dia outro - no caixão *<br>Destrói vermelho veste colar **</em></strong>',
		'show scene #000000 with fadeIn',
		'O homem estava realmente maluco. Enquanto você pensa no que fazer diante da absurda proposta do testamento, alguém bate à porta. O advogado pega o lampião e vocês vão atender.',
		'show scene 31.05.00 with fadeIn',
		'A porta aberta revela uma mulher maltrapilha, com roupas rasgadas e apodrecidas, que exalam um inacreditável fedor nauseante.',
		'show scene 31.06.00 with fadeIn',
		'Tudo acontece muito rápido: ela grita como um animal, pula para dentro e ataca o advogado, que derruba o lampião. Agarra seu pescoço com as mãos e morde sua garganta.',
		'Kátia grita em pânico e foge, sumindo dentro da casa.',
		'O lampião está caído no chão. Um grande e pesado pedaço de madeira está a seu alcance.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'fogo': {
					'Text': 'Atacar a mulher com fogo do lampião',
					'Do': 'jump 15'
				},
				'madeira': {
					'Text': 'Golpear a louca com o pedaço de madeira',
					'Do': 'jump 5'
				},
				'nada': {
					'Text': 'Nada, ver o que acontece',
					'Do': 'jump 34'
				}
			}
		}
	],
	'32': [
		'show scene #000000 with fadeIn',
		'Você acha que esses dois não tem o direito de incomodá-los e quer ficar na casa para a leitura do testamento. Como eles insistem que alguém os acompanhe, Boris decide ir.',
		'jump 31'
	],
	'33': [
		'show scene 33.01.00 with fadeIn',
		'A estrada de terra parece não ter fim. Você está quase acreditando que nunca mais voltará para casa, até encontrar o alívio da estrada asfaltada.',
		'show scene 33.02.00 with fadeIn','Agora, mesmo longe daquele lugar, você sente que o nervosismo não deixará que você durma tranquilo tão cedo. O remorso por abandonar os outros no meio dos loucos também não vai ajudar.',
		'Ah, você mal pode esperar para denunciar os habitantes daquele lugar insano à polícia...',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Parabéns!<br><i class="fas fa-trophy"></i><br>Você chegou a um dos fins possíveis dessa aventura!</span>',
		'end'
	],
	'34': [
		'show scene 34.01.00 with fadeIn',
		'Com horror, você ouve a cartilagem da traqueia do homem se partir. A mulher parece estar devorando pedaços dele!',
		'show scene 34.02.00 with fadeIn',
		'Paralisado de medo, você não consegue fazer nada até o instante em que ela perde o interesse no advogado e avança em sua direção.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'fogo': {
					'Text': 'Atacar a mulher com fogo do lampião',
					'Do': 'jump 15'
				},
				'fugir': {
					'Text': 'Fugir, é a melhor coisa a fazer!',
					'Do': 'jump 12'
				},
				'esperar': {
					'Text': 'Esperar para lutar com ela',
					'Do': 'jump 3'
				}
			}
		}
	],
	'35': [
		'show scene 35.01.00 with fadeIn',
		'A porta do porão é a mais próxima e você pode se esconder lá enquanto não chega ajuda. Você destranca a porta e entra. A escuridão é total, e você tateia enquanto desce as escadas.',
		'Um forte odor de carne putrefata invade suas narinas, no exato instante em que você se lembra de algo sobre...',
		'show scene 35.02.00 with fadeIn',
		'Você grita de susto quando algo puxa sua perna, fazendo com que caia. Mal pode se recuperar da queda quando sente algo sobre você, apertando seu pescoço. Você tenta escapar, mas é tarde...',
		'Seus olhos nunca mais verão a luz do sol novamente.',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'36': [
		'show scene #000000 with fadeIn',
		'Esse carro é sua única chance de fuga. Você dispara em corrida e entra.',
		'show scene 36.01.00 with fadeIn',
		'As chaves estão no contato, felizmente, mas o movimento chama a atenção de alguém dentro da delegacia.',
		'show scene 36.02.00 with fadeIn',
		'Você liga o carro e parte fritando pneus bem a tempo de ver pelo retrovisor o delegado que corre para a rua e tenta alguns tiros em sua direção. Um deles chega a atingir o vidro traseiro, mas apenas isso.',
		'Logo você está longe penetrando pela estrada de terra que leva para for da cidade.',
		'jump 33'
	],
	'37': [
		'show scene 37.01.00 with fadeIn',
		'Seguindo até o fim da rua vocês logo percebem uma alta colina, com uma casa em seu topo.',
		'A casa de Silvio, com certeza.',
		'A colina é cercada de mato fechado, e mesmo a trilha que leva até a casa está um pouco tomada pela vegetação.',
		'show scene #000000 with fadeIn',
		'Enquanto vocês rumam parar lá as pessoas na rua param para observá-los; uma mulher atira pedras no carro, mas não acerta nenhuma.',
		'show scene 37.02.00 with fadeIn',
		'A casa parece abandonada. A porta da frente está fechada com um cadeado enferrujado, que por pouco não abre com a chave em poder do advogado.',
		'show scene 37.03.00 with fadeIn',
		'Um forte cheiro de mofo toma conta do ar. O interior é escuro, e a luz do poente não deixa ver muita coisa.',
		'show scene 37.04.00 with fadeIn',
		'Sabendo que a casa certamente não teria luz elétrica, o advogado trouxe um lampião a querosene e algumas velas.',
		'O advogado leva-os até um escritório, onde vocês devem aguardar até a hora marcada.',
		'Ele diz que vocês podem olhar a casa se quiserem, mas Silvio deixou recomendações para que o porão não seja visitado antes da leitura do testamento.',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'ficar': {
					'Text': 'Ficar quietinho e esperar pelas onze da noite',
					'Do': 'jump 30'
				},
				'ver': {
					'Text': 'Ver a casa',
					'Do': 'jump 28'
				}
			}
		}
	],
	'38': [
		'show scene 38.01.00 with fadeIn',
		'Devagar, com cuidado, você consegue puxar a chave do bolso do guarda. Destranca a fechadura e abre a porta, que range um pouco mas o guarda apenas ronca mais alto. Grande carcereiro, esse!',
		'show scene 38.02.00 with fadeIn',
		'Quando você sai da delegacia e chega ao carro, mal pode acreditar nos próprios olhos: uma pequena multidão de pessoas com mantos negros vem em suas direção.',
		'Estão empunhando facas e entoando cânticos estranhos.',
		'Parece uma boa hora para cair fora!',
		'show scene #000000 with fadeIn',
		{
			'Choice': {
				'Dialog': 'O que fazer?',
				'fugir': {
					'Text': 'Fugir desta cidade insana',
					'Do': 'jump 14'
				},
				'voltar': {
					'Text': 'Voltar para a casa de Silvio',
					'Do': 'jump 25'
				}
			}
		}
	],
	'39': [
		'show scene 39.01.00 with fadeIn',
		'Talvez essas pessoas saibam algo sobre o que está acontecendo aqui. Você se aproxima e percebe que aos poucos, todos os olhares voltam-se na sua direção.',
		'show scene 39.02.00 with fadeIn',
		'Um olhar mais atento faz com que você perceba algo horrível: todos eles estão com as roupas manchadas de vermelho!',
		'show scene 39.03.00 with fadeIn',
		'Tarde demais, você chega a conclusão de que todos nessa cidade são loucos assassinos e que foi tolice se aproximar.',
		'Arrepender-se de sua estupidez é a última coisa que você consegue fazer antes que um deles aponte uma arma e atire.',
		'A bala tira a sua vida o mesmo instante.',
		'show scene #000000 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Fim da linha.<br><i class="fas fa-skull"></i><br>Você chegou a um dos possíveis fins dessa aventura.</span>',
		'end'
	],
	'40': [
		'show scene 40.01.00 with fadeIn',
		'Você joga o medalhão no fogo com o coração aos pulos. Imediatamente uma luz começa a jorrar do buraco, e você escuta gritos a sua volta. Árvores começam a pegar fogo e tombar.',
		'Parece que o ritual funcionou!',
		'show scene 40.02.00 with fadeIn',
		'Você começa a correr, pois em breve toda a floresta deverá estar em chamas. Chegando a cidade, percebe uma grande agitação e confusão por todos os lados.',
		'show scene 40.03.00 with fadeIn',
		'As pessoas se agarram as próprias cabeças e correm sem destino. Uma a uma, como a mata, também começam a pegar fogo. Em meio ao caos, alguém acaba chocando-se com você.',
		'É Kátia! Está apavorada, mas parece bem, pelo menos não é um zumbi em chamas. Você segura-a pela mão e, juntos, conseguem chegar até o carro do advogado, estacionado diante da delegacia.',
		'Você encontra as chaves no contato e dá partida no motor.',
		'show scene 40.04.00 with fadeIn',
		'Quando sai da cidade, você ainda pode ver pelo retrovisor as chamas que consomem a cidade.',
		'Quase pode sentir o fogo purificando o lugar, incinerando todo o mal. Não sabe se conseguirá receber sua herança por ter cumprido as condições do testamento, mas isso já não parece tão importante.',
		'show scene 40.05.00 with fadeIn',
		'Kátia entrega-se a um choro restaurador e uma paz sem igual toma conta de você enquanto dirige de volta para casa...',
		'show scene 40.06.00 with fadeIn',
		'stop music with fade 5',
		'centered <span style="color: white">Parabéns!<br><i class="fas fa-trophy"></i><br>Você chegou a um dos fins possíveis dessa aventura!</span>',
		'end'
	]
});
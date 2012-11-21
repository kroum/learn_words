var lwds = lwds || {};

(function() {
	learnWords = function(wordsSets) {
	var _words = [], 
		content, head, trans,
		timer, displayTimer;
	
	var _loadScript = function(scriptSrc) {
		
	};
	
	var _createUI = function() {
		content = document.createElement('div');
		content.setAttribute('style', 'width:250px;float:left;overflow:hidden;visibility:hidden;position:fixed;top:250px;left:100px;z-index:1000;background-color:#fff;border:1px solid #000;padding:10px;');

		head = document.createElement('h3');
		trans = document.createElement('p');

		content.appendChild(head);
		content.appendChild(trans);

		document.getElementsByTagName('body')[0].appendChild(content);
	};
	
	var showElement = function(element) {
		var style = element.getAttribute('style');
		if (-1 == style.indexOf('visibility')) {
			style += 'visibility:visible';
		}
		else {
			style = style.replace('visibility:hidden','visibility:visible');
		}
		element.setAttribute('style', style);
	};
	
	var hideElement = function(element) {
		var style = element.getAttribute('style');
		if (-1 == style.indexOf('visibility')) {
			style += 'visibility:hidden';
		}
		else {
			style = style.replace('visibility:visible','visibility:hidden');
		}
		element.setAttribute('style', style);
	};
	
	var showWords = function() {
		var len = _words.length;
		var wordsPair = _words[Math.floor(Math.random()*(len+1))];
		if (undefined !== wordsPair) {
			head.innerHTML = wordsPair.orig;
			trans.innerHTML = wordsPair.trans;
		}
		showElement(content);
		setTimeout(function() {
			hideElement(content);

			if (undefined !== displayTimer && null !== displayTimer) {
				clearTimeout(displayTimer);
			}
			displayTimer = setTimeout(function(){showWords();}, 10000);
		}, 5000);
	}
	
	var _init = function(wordsSets){
		for (var i in wordsSets) {
			_loadScript(wordsSets[i]);
		}
		_createUI();
	};
	
	_init(wordsSets);
	return {
		addWordsSet: function(wordsSet){
			_words = _words.concat(wordsSet);
			if (undefined !== displayTimer && null !== displayTimer) {
				clearTimeout(displayTimer);
			}
			displayTimer = setTimeout(showWords(), 10000);
		}
	};
};
return learnWords;
}
)()

if (undefined === lwds.learn) {
	lwds.learn = new learnWords();
}


lwds.learn.addWordsSet([
				{orig: "Ask me another", trans: "Спроси что полегче!"},
				{orig: "eat one's words", trans: "взять слова обратно"},
				{orig: "Enough of it", trans: "Довольно об этом"},
				{orig: "go into details", trans: "вдаваться в детали"},
				{orig: "I don’t care", trans: "Меня не волнует"},
				{orig: "I have no idea", trans: "Понятия не имею"},
				{orig: "I mean it!", trans: "Я серьёзно"},
				{orig: "I wish I knew", trans: "Хотел бы я знать!"},
				{orig: "It doesn’t matter", trans: "Это не важно"},
				{orig: "It doesn't make sense", trans: "Это не имеет смысла"},
				{orig: "It doesn't prove a thing", trans: "Это ничего не доказывает"},
				{orig: "It' s none of your business", trans: "Не твоё дело"},
				{orig: "It's a lie", trans: "Это ложь"},
				{orig: "It's all the same to me", trans: "Мне без разницы"},
				{orig: "It's beside the point", trans: "Это не относится к вопросу"},
				{orig: "It's new to me", trans: "Первый раз слышу"},
				{orig: "It's out of place", trans: "Это неуместно"},
				{orig: "It's up to you", trans: "Решай сам"},
				{orig: "It's waste of time", trans: "Это трата времени"},
				{orig: "Let's clear it up", trans: "Давай разберёмся."},
				{orig: "Let's drop the subject", trans: "Давай оставим эту тему"},
				{orig: "Mind one's own business", trans: "Занимайся своим делом"},
				{orig: "no matter", trans: "не имеет значения"},
				{orig: "point of view", trans: "точка зрения"},
				{orig: "pro and con", trans: "за и против"},
				{orig: "say one's say", trans: "высказать мнение"},
				{orig: "side against", trans: "принять противоположную сторону"},
				{orig: "So what?", trans: "Ну и что?"},
				{orig: "speak one's mind", trans: "высказать своё мнение"},
				{orig: "stand one's ground", trans: "сохранять своё мнение"},
				{orig: "stand to reason", trans: "иметь смысл, быть логичным следствием "},
				{orig: "take a side", trans: "принять сторону"},
				{orig: "take a stand", trans: "занять жёсткую позицию"},
				{orig: "take into account", trans: "принимать во внимание"},
				{orig: "That's not the point", trans: "Это не относится к вопросу"},
				{orig: "That's very well, but", trans: "Это всё очень хорошо, но…"},
				{orig: "to one's face", trans: "в лицо (сказать открыто)"},
				{orig: "up against", trans: "противостоять"},
				{orig: "Use your own judgement", trans: "Решай сам"},
				{orig: "What are you driving at?", trans: "К чему ты клонишь?"},
				{orig: "What are you talking about?", trans: "О чём ты!"},
				{orig: "What for?", trans: "Зачем?"},
				{orig: "What of it?", trans: "И что из этого?"},
				{orig: "You can take it from me", trans: "Можешь мне поверить"}			
			]);
lwds.learn.addWordsSet([
				{orig: "By the way.", trans: "Между прочим. "},
				{orig: "A drop in the bucket", trans: "Капля в море "},
				{orig: "And so on and so forth", trans: "И т.д. и т.п. "},
				{orig: "As drunk as a lord", trans: "Пьян в стельку "},
				{orig: "As I said before.", trans: "Как я говорил.. "},
				{orig: "As innocent as a babe unborn", trans: "Совсем как ребенок "},
				{orig: "As sure as eggs is eggs", trans: "Как дважды два "},
				{orig: "As to... (As for.)", trans: "Что касается. "},
				{orig: "Believe it or not, but", trans: "верите или нет, но "},
				{orig: "Did I get you right?", trans: "Я правильно понял? "},
				{orig: "Don't mention it", trans: "Не благодарите "},
				{orig: "Don't take it to heart", trans: "Не принимай близко к сердцу "},
				{orig: "Forgive me, please, I meant well.", trans: "Извините, я хотел как лучше "},
				{orig: "He is not a man to be trifled with", trans: "С ним лучше не шутить "},
				{orig: "I am afraid you are wrong", trans: "Боюсь, что Вы не правы "},
				{orig: "I didn't catch the last word", trans: "Я не понял последнее слово "},
				{orig: "I mean it", trans: "Именно это я имею в виду "},
				{orig: "I was not attending", trans: "Я прослушал "},
				{orig: "If I am not mistaken", trans: "Если я не ошибаюсь "},
				{orig: "If I remember rightly", trans: "Если я правильно помню "},
				{orig: "In other words.", trans: "Другими словами "},
				{orig: "In short.", trans: "Вкратце "},
				{orig: "It does you credit", trans: "Это делает вам честь "},
				{orig: "It doesn't matter", trans: "Это не важно "},
				{orig: "It is a good idea", trans: "Это хорошая мысль "},
				{orig: "It is new to me", trans: "Это новость для меня "},
				{orig: "Let us hope for the best", trans: "Давайте надеяться на лучшее "},
				{orig: "May I ask you a question?", trans: "Могу я спросить? "},
				{orig: "Mind your own business", trans: "Занимайся своим делом "},
				{orig: "Most likely", trans: "Наиболее вероятно "},
				{orig: "Neither here nor there", trans: "Ни то, ни се "},
				{orig: "Next time lucky", trans: "Повезет в следующий раз "},
				{orig: "Nothing much", trans: "Ничего особенного "},
				{orig: "Oh, that. That explains it", trans: "Это все объясняет "},
				{orig: "On the one hand .", trans: "С одной стороны "},
				{orig: "On the other hand .", trans: "С другой стороны "},
				{orig: "Say it again, please", trans: "Повторите еще раз, пожалуйста "},
				{orig: "That's where the trouble lies", trans: "Вот в чем дело! "},
				{orig: "Things happen", trans: "Всякое бывает "},
				{orig: "What do you mean by saying it?", trans: "Что Вы имеете ввиду? "},
				{orig: "What is the matter?", trans: "В чем дело? "},
				{orig: "Where were we?", trans: "На чем мы остановились? "},
				{orig: "You were saying?", trans: "Вы что-то сказали?"}
			]);

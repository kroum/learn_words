var lwds = lwds || {};

var learnWords = function(wordsSets) {
	var _words = [], 
		content, head, trans,
		timer, displayTimer;
	
	var _loadScript = function(scriptSrc) {
		
	};
	
	var _createUI = function() {
		content = document.createElement('div');
		content.setAttribute('style', 'width:250px;float:left;overflow:hidden;visibility:hidden;position:absolute;top:250px;left:0;z-index:1000');

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

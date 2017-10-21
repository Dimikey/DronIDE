'use strict';
/*GENERATE*/

// головной модуль определения версии платы Ардутека
Blockly.Arduino['artboard'] = function(block) {
	var dropdown_artboards = this.getFieldValue('artboards');
	var board_define = '';
	// #include
	switch(dropdown_artboards)
	{
		// добавляем библиотеки для ардутека
		case '0': case '1': case '2':
		{
			board_define += '// Работаем с конструктором Architechnic\n';
			//Blockly.Arduino.definitions_['define_ardutech'] 		= '#include "architechnic001.h"';
		}break;

		// добавляем библиотеки для стартового набора
		case '200':
		{
			board_define += '// Работаем с набором Arduino Kit #1\n';

		}break;
	}
	// definitions
	board_define += '#define ART_BOARD_VERSION %0\n'.replace(/%0/g, dropdown_artboards);

	Blockly.Arduino.definitions_['define_board_%0'.replace(/%0/g,dropdown_artboards)] = board_define;

	// void setup()
	//  Blockly.Arduino.setups_['setup_motor_'+dropdown_ports] = 'ArTMotorDriver motor_%0(%0);'.replace(/%0/g, dropdown_ports);

	// void loop()
	var code = '';
	return code;
};

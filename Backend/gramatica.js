/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,4],$V2=[1,5],$V3=[1,6],$V4=[1,9],$V5=[1,7],$V6=[1,8],$V7=[1,10],$V8=[1,11],$V9=[2,5,7,12,15,16,17,21,22,23,25,29,31],$Va=[1,32],$Vb=[1,35],$Vc=[1,31],$Vd=[1,33],$Ve=[1,34],$Vf=[1,29],$Vg=[1,38],$Vh=[8,17,36,39,40],$Vi=[1,49],$Vj=[10,11,41,48,49,50,51],$Vk=[2,34],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[10,11,20,30,36,37,38,41,44,45,46,47,48,49,50,51],$Vq=[10,11],$Vr=[10,11,20,30,36,41,44,45,46,47,48,49,50,51],$Vs=[10,11,50,51],$Vt=[1,95],$Vu=[1,96],$Vv=[15,29,31];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"ini":3,"instrucciones":4,"EOF":5,"instruccion":6,"RIMPRIMIR":7,"PARIZQ":8,"expresion_cadena":9,"PARDER":10,"PTCOMA":11,"RMIENTRAS":12,"expresion_logica":13,"LLAVIZQ":14,"LLAVDER":15,"RPARA":16,"IDENTIFICADOR":17,"IGUAL":18,"expresion_numerica":19,"MAS":20,"RNUMERO":21,"RSTRING":22,"RIF":23,"RELSE":24,"RSWITCH":25,"casos":26,"operadores":27,"caso_evaluar":28,"RCASE":29,"DOSPTS":30,"RDEFAULT":31,"O_MAS":32,"O_MENOS":33,"O_POR":34,"O_DIVIDIDO":35,"MENOS":36,"POR":37,"DIVIDIDO":38,"ENTERO":39,"DECIMAL":40,"CONCAT":41,"CADENA":42,"expresion_relacional":43,"MAYQUE":44,"MENQUE":45,"MAYIGQUE":46,"MENIGQUE":47,"DOBLEIG":48,"NOIG":49,"AND":50,"OR":51,"NOT":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"RIMPRIMIR",8:"PARIZQ",10:"PARDER",11:"PTCOMA",12:"RMIENTRAS",14:"LLAVIZQ",15:"LLAVDER",16:"RPARA",17:"IDENTIFICADOR",18:"IGUAL",20:"MAS",21:"RNUMERO",22:"RSTRING",23:"RIF",24:"RELSE",25:"RSWITCH",29:"RCASE",30:"DOSPTS",31:"RDEFAULT",32:"O_MAS",33:"O_MENOS",34:"O_POR",35:"O_DIVIDIDO",36:"MENOS",37:"POR",38:"DIVIDIDO",39:"ENTERO",40:"DECIMAL",41:"CONCAT",42:"CADENA",44:"MAYQUE",45:"MENQUE",46:"MAYIGQUE",47:"MENIGQUE",48:"DOBLEIG",49:"NOIG",50:"AND",51:"OR",52:"NOT"},
productions_: [0,[3,2],[4,2],[4,1],[6,5],[6,7],[6,15],[6,3],[6,3],[6,4],[6,7],[6,11],[6,7],[6,4],[6,1],[26,2],[26,1],[28,4],[28,3],[27,1],[27,1],[27,1],[27,1],[19,2],[19,3],[19,3],[19,3],[19,3],[19,3],[19,1],[19,1],[19,1],[9,3],[9,1],[9,1],[43,3],[43,3],[43,3],[43,3],[43,3],[43,3],[13,3],[13,3],[13,2],[13,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

		// cuado se haya reconocido la entrada completa retornamos el AST
		return $$[$0-1];
	
break;
case 2:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 3:
 this.$ = [$$[$0]]; 
break;
case 4:
 this.$ = instruccionesAPI.nuevoImprimir($$[$0-2]); 
break;
case 5:
 this.$ = instruccionesAPI.nuevoMientras($$[$0-4], $$[$0-1]); 
break;
case 6:
 this.$ = instruccionesAPI.nuevoPara($$[$0-12],$$[$0-10],$$[$0-8],$$[$0-6],$$[$0-1]) 
break;
case 7:
 this.$ = instruccionesAPI.nuevoDeclaracion($$[$0-1], TIPO_DATO.NUMERO); 
break;
case 8:
 this.$ = instruccionesAPI.nuevoDeclaracion($$[$0-1], TIPO_DATO.STRING); 
break;
case 9:
 this.$ = instruccionesAPI.nuevoAsignacion($$[$0-3], $$[$0-1]); 
break;
case 10:
 this.$ = instruccionesAPI.nuevoIf($$[$0-4], $$[$0-1]); 
break;
case 11:
 this.$ = instruccionesAPI.nuevoIf($$[$0-8], $$[$0-5], $$[$0-1]); 
break;
case 12:
 this.$ = instruccionesAPI.nuevoSwitch($$[$0-4],$$[$0-1]);
break;
case 13:
 this.$ = instruccionesAPI.nuevoAsignacionSimplificada($$[$0-3], $$[$0-2], $$[$0-1]); 
break;
case 14:
 console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
break;
case 15:

      $$[$0-1].push($$[$0]);
	  this.$ = $$[$0-1];
    
break;
case 16:
 this.$ = instruccionesAPI.nuevoListaCasos($$[$0]);
break;
case 17:
 this.$ = instruccionesAPI.nuevoCaso($$[$0-2],$$[$0]); 
break;
case 18:
 this.$ = instruccionesAPI.nuevoCasoDef($$[$0]); 
break;
case 19:
 this.$ = instruccionesAPI.nuevoOperador(TIPO_OPERACION.SUMA); 
break;
case 20:
 this.$ = instruccionesAPI.nuevoOperador(TIPO_OPERACION.RESTA); 
break;
case 21:
 this.$ = instruccionesAPI.nuevoOperador(TIPO_OPERACION.MULTIPLICACION); 
break;
case 22:
 this.$ = instruccionesAPI.nuevoOperador(TIPO_OPERACION.DIVISION); 
break;
case 23:
 this.$ = instruccionesAPI.nuevoOperacionUnaria($$[$0], TIPO_OPERACION.NEGATIVO); 
break;
case 24:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.SUMA); 
break;
case 25:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.RESTA); 
break;
case 26:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MULTIPLICACION); 
break;
case 27:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DIVISION); 
break;
case 28:
 this.$ = $$[$0-1]; 
break;
case 29: case 30:
 this.$ = instruccionesAPI.nuevoValor(Number($$[$0]), TIPO_VALOR.NUMERO); 
break;
case 31:
 this.$ = instruccionesAPI.nuevoValor($$[$0], TIPO_VALOR.IDENTIFICADOR); 
break;
case 32:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.CONCATENACION); 
break;
case 33:
 this.$ = instruccionesAPI.nuevoValor($$[$0], TIPO_VALOR.CADENA); 
break;
case 34: case 44:
 this.$ = $$[$0]; 
break;
case 35:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR_QUE); 
break;
case 36:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR_QUE); 
break;
case 37:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MAYOR_IGUAL); 
break;
case 38:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.MENOR_IGUAL); 
break;
case 39:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.DOBLE_IGUAL); 
break;
case 40:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.NO_IGUAL); 
break;
case 41:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.AND); 
break;
case 42:
 this.$ = instruccionesAPI.nuevoOperacionBinaria($$[$0-2], $$[$0], TIPO_OPERACION.OR); 
break;
case 43:
 this.$ = instruccionesAPI.nuevoOperacionUnaria($$[$0], TIPO_OPERACION.NOT); 
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{1:[3]},{2:$V0,5:[1,13],6:14,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},o($V9,[2,3]),{8:[1,15]},{8:[1,16]},{8:[1,17]},{17:[1,18]},{17:[1,19]},{18:[1,20],27:21,32:[1,22],33:[1,23],34:[1,24],35:[1,25]},{8:[1,26]},{8:[1,27]},o($V9,[2,14]),{1:[2,1]},o($V9,[2,2]),{8:$Va,9:28,17:$Vb,19:30,36:$Vc,39:$Vd,40:$Ve,42:$Vf},{8:$Va,9:40,13:36,17:$Vb,19:39,36:$Vc,39:$Vd,40:$Ve,42:$Vf,43:37,52:$Vg},{17:[1,41]},{11:[1,42]},{11:[1,43]},{8:$Va,9:44,17:$Vb,19:30,36:$Vc,39:$Vd,40:$Ve,42:$Vf},{8:$Va,17:$Vb,19:45,36:$Vc,39:$Vd,40:$Ve},o($Vh,[2,19]),o($Vh,[2,20]),o($Vh,[2,21]),o($Vh,[2,22]),{8:$Va,9:40,13:46,17:$Vb,19:39,36:$Vc,39:$Vd,40:$Ve,42:$Vf,43:37,52:$Vg},{8:$Va,17:$Vb,19:47,36:$Vc,39:$Vd,40:$Ve},{10:[1,48],41:$Vi},o($Vj,[2,33]),o($Vj,$Vk,{20:$Vl,36:$Vm,37:$Vn,38:$Vo}),{8:$Va,17:$Vb,19:54,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:55,36:$Vc,39:$Vd,40:$Ve},o($Vp,[2,29]),o($Vp,[2,30]),o($Vp,[2,31]),{10:[1,56]},o($Vq,[2,44],{50:[1,57],51:[1,58]}),{8:$Va,9:40,17:$Vb,19:39,36:$Vc,39:$Vd,40:$Ve,42:$Vf,43:59},o([41,48,49],$Vk,{20:$Vl,36:$Vm,37:$Vn,38:$Vo,44:[1,60],45:[1,61],46:[1,62],47:[1,63]}),{41:$Vi,48:[1,64],49:[1,65]},{18:[1,66]},o($V9,[2,7]),o($V9,[2,8]),{11:[1,67],41:$Vi},{11:[1,68],20:$Vl,36:$Vm,37:$Vn,38:$Vo},{10:[1,69]},{10:[1,70],20:$Vl,36:$Vm,37:$Vn,38:$Vo},{11:[1,71]},{8:$Va,9:72,17:$Vb,19:30,36:$Vc,39:$Vd,40:$Ve,42:$Vf},{8:$Va,17:$Vb,19:73,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:74,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:75,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:76,36:$Vc,39:$Vd,40:$Ve},o($Vp,[2,23]),{10:[1,77],20:$Vl,36:$Vm,37:$Vn,38:$Vo},{14:[1,78]},{8:$Va,9:40,17:$Vb,19:39,36:$Vc,39:$Vd,40:$Ve,42:$Vf,43:79},{8:$Va,9:40,17:$Vb,19:39,36:$Vc,39:$Vd,40:$Ve,42:$Vf,43:80},o($Vq,[2,43]),{8:$Va,17:$Vb,19:81,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:82,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:83,36:$Vc,39:$Vd,40:$Ve},{8:$Va,17:$Vb,19:84,36:$Vc,39:$Vd,40:$Ve},{8:$Va,9:85,17:$Vb,19:30,36:$Vc,39:$Vd,40:$Ve,42:$Vf},{8:$Va,9:86,17:$Vb,19:30,36:$Vc,39:$Vd,40:$Ve,42:$Vf},{8:$Va,17:$Vb,19:87,36:$Vc,39:$Vd,40:$Ve},o($V9,[2,9]),o($V9,[2,13]),{14:[1,88]},{14:[1,89]},o($V9,[2,4]),o($Vj,[2,32]),o($Vr,[2,24],{37:$Vn,38:$Vo}),o($Vr,[2,25],{37:$Vn,38:$Vo}),o($Vp,[2,26]),o($Vp,[2,27]),o($Vp,[2,28]),{2:$V0,4:90,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},o($Vq,[2,41]),o($Vq,[2,42]),o($Vs,[2,35],{20:$Vl,36:$Vm,37:$Vn,38:$Vo}),o($Vs,[2,36],{20:$Vl,36:$Vm,37:$Vn,38:$Vo}),o($Vs,[2,37],{20:$Vl,36:$Vm,37:$Vn,38:$Vo}),o($Vs,[2,38],{20:$Vl,36:$Vm,37:$Vn,38:$Vo}),o($Vs,[2,39],{41:$Vi}),o($Vs,[2,40],{41:$Vi}),{11:[1,91],20:$Vl,36:$Vm,37:$Vn,38:$Vo},{2:$V0,4:92,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{26:93,28:94,29:$Vt,31:$Vu},{2:$V0,6:14,7:$V1,12:$V2,15:[1,97],16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{8:$Va,9:40,13:98,17:$Vb,19:39,36:$Vc,39:$Vd,40:$Ve,42:$Vf,43:37,52:$Vg},{2:$V0,6:14,7:$V1,12:$V2,15:[1,99],16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{15:[1,100],28:101,29:$Vt,31:$Vu},o($Vv,[2,16]),{8:$Va,17:$Vb,19:102,36:$Vc,39:$Vd,40:$Ve},{30:[1,103]},o($V9,[2,5]),{11:[1,104]},o($V9,[2,10],{24:[1,105]}),o($V9,[2,12]),o($Vv,[2,15]),{20:$Vl,30:[1,106],36:$Vm,37:$Vn,38:$Vo},{2:$V0,4:107,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{17:[1,108]},{14:[1,109]},{2:$V0,4:110,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},o($Vv,[2,18],{6:14,2:$V0,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8}),{20:[1,111]},{2:$V0,4:112,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},o($Vv,[2,17],{6:14,2:$V0,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8}),{20:[1,113]},{2:$V0,6:14,7:$V1,12:$V2,15:[1,114],16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{10:[1,115]},o($V9,[2,11]),{14:[1,116]},{2:$V0,4:117,6:3,7:$V1,12:$V2,16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},{2:$V0,6:14,7:$V1,12:$V2,15:[1,118],16:$V3,17:$V4,21:$V5,22:$V6,23:$V7,25:$V8},o($V9,[2,6])],
defaultActions: {13:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

	const TIPO_OPERACION	= require('./instrucciones').TIPO_OPERACION;
	const TIPO_VALOR 		= require('./instrucciones').TIPO_VALOR;
	const TIPO_DATO			= require('./tabla_simbolos').TIPO_DATO; //para jalar el tipo de dato
	const instruccionesAPI	= require('./instrucciones').instruccionesAPI;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// se ignoran espacios en blanco
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 7;
break;
case 4:return 21;
break;
case 5:return 22;
break;
case 6:return 12;
break;
case 7:return 23;
break;
case 8:return 24;
break;
case 9:return 16;
break;
case 10:return 25;
break;
case 11:return 29;
break;
case 12:return 31;
break;
case 13:return 'RBREAK';
break;
case 14:return 30;
break;
case 15:return 11;
break;
case 16:return 14;
break;
case 17:return 15;
break;
case 18:return 8;
break;
case 19:return 10;
break;
case 20:return 32;
break;
case 21:return 33;
break;
case 22:return 34;
break;
case 23:return 35;
break;
case 24:return 50
break;
case 25:return 51;
break;
case 26:return 20;
break;
case 27:return 36;
break;
case 28:return 37;
break;
case 29:return 38;
break;
case 30:return 41;
break;
case 31:return 47;
break;
case 32:return 46;
break;
case 33:return 48;
break;
case 34:return 49;
break;
case 35:return 45;
break;
case 36:return 44;
break;
case 37:return 18;
break;
case 38:return 52;
break;
case 39: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 42; 
break;
case 40:return 40;
break;
case 41:return 39;
break;
case 42:return 17;
break;
case 43:return 5;
break;
case 44: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:imprimir\b)/i,/^(?:numero\b)/i,/^(?:string\b)/i,/^(?:mientras\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:para\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:break\b)/i,/^(?::)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+=)/i,/^(?:-=)/i,/^(?:\*=)/i,/^(?:\/=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:&)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:!)/i,/^(?:"[^\"]*")/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
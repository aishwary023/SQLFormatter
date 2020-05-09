(this.webpackJsonpformatter=this.webpackJsonpformatter||[]).push([[0],{28:function(e,t,n){e.exports=n(74)},35:function(e,t,n){},36:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var E=n(0),r=n.n(E),a=n(26),o=n.n(a),i=(n(35),n(1)),T=n(2),R=n(4),c=n(3),s=(n(36),function(e){Object(R.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var E=arguments.length,r=new Array(E),a=0;a<E;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(T.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group",id:"inputText"},r.a.createElement("div",{className:"input-group-prepend"}),r.a.createElement("textarea",{id:"inputSQL",className:"form-control",onChange:this.props.onChange,placeholder:"Input SQL Query here!"}))}}]),n}(E.Component)),u=function(e){Object(R.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var E=arguments.length,r=new Array(E),a=0;a<E;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(T.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group",id:"outputText"},r.a.createElement("div",{className:"input-group-prepend"}),r.a.createElement("textarea",{className:"form-control",id:"outputSQL",placeholder:"Formatted SQL will appear here!"}))}}]),n}(E.Component),O=function(e){Object(R.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var E=arguments.length,r=new Array(E),a=0;a<E;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(T.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"SQLFormatter"))}}]),n}(E.Component),l=function(e){Object(R.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var E=arguments.length,r=new Array(E),a=0;a<E;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(T.a)(n,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn btn-warning btn-lg ",id:"formatBtn",onClick:this.props.onClick},"Format!")}}]),n}(E.Component),N=n(27),S=n.n(N),I=n(9),A=n.n(I),h="whitespace",L="word",C="string",g="reserved",_="reserved-toplevel",p="reserved-newline",d="operator",P="open-paren",v="close-paren",k="line-comment",D="block-comment",M="number",m="placeholder",y=function(){function e(t){Object(i.a)(this,e),this.WHITESPACE_REGEX=/^(\s+)/,this.NUMBER_REGEX=/^((-\s*)?[0-9]+(\.[0-9]+)?|0x[0-9a-fA-F]+|0b[01]+)\b/,this.OPERATOR_REGEX=/^(!=|<>|==|<=|>=|!<|!>|\|\||::|->>|->|~~\*|~~|!~~\*|!~~|~\*|!~\*|!~|.)/,this.BLOCK_COMMENT_REGEX=/^(\/\*[^]*?(?:\*\/|$))/,this.LINE_COMMENT_REGEX=this.createLineCommentRegex(t.lineCommentTypes),this.RESERVED_TOPLEVEL_REGEX=this.createReservedWordRegex(t.reservedToplevelWords),this.RESERVED_NEWLINE_REGEX=this.createReservedWordRegex(t.reservedNewlineWords),this.RESERVED_PLAIN_REGEX=this.createReservedWordRegex(t.reservedWords),this.WORD_REGEX=this.createWordRegex(t.specialWordChars),this.STRING_REGEX=this.createStringRegex(t.stringTypes),this.OPEN_PAREN_REGEX=this.createParenRegex(t.openParens),this.CLOSE_PAREN_REGEX=this.createParenRegex(t.closeParens),this.INDEXED_PLACEHOLDER_REGEX=this.createPlaceholderRegex(t.indexedPlaceholderTypes,"[0-9]*"),this.IDENT_NAMED_PLACEHOLDER_REGEX=this.createPlaceholderRegex(t.namedPlaceholderTypes,"[a-zA-Z0-9._$]+"),this.STRING_NAMED_PLACEHOLDER_REGEX=this.createPlaceholderRegex(t.namedPlaceholderTypes,this.createStringPattern(t.stringTypes))}return Object(T.a)(e,[{key:"createLineCommentRegex",value:function(e){return new RegExp("^((?:".concat(e.map((function(e){return A()(e)})).join("|"),").*?(?:\n|$))"))}},{key:"createReservedWordRegex",value:function(e){var t=e.join("|").replace(/ /g,"\\s+");return new RegExp("^(".concat(t,")\\b"),"i")}},{key:"createWordRegex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new RegExp("^([\\w".concat(e.join(""),"]+)"))}},{key:"createStringRegex",value:function(e){return new RegExp("^("+this.createStringPattern(e)+")")}},{key:"createStringPattern",value:function(e){var t={"``":"((`[^`]*($|`))+)","[]":"((\\[[^\\]]*($|\\]))(\\][^\\]]*($|\\]))*)",'""':'(("[^"\\\\]*(?:\\\\.[^"\\\\]*)*("|$))+)',"''":"(('[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)","N''":"((N'[^N'\\\\]*(?:\\\\.[^N'\\\\]*)*('|$))+)"};return e.map((function(e){return t[e]})).join("|")}},{key:"createParenRegex",value:function(e){var t=this;return new RegExp("^("+e.map((function(e){return t.escapeParen(e)})).join("|")+")","i")}},{key:"escapeParen",value:function(e){return 1===e.length?A()(e):"\\b"+e+"\\b"}},{key:"createPlaceholderRegex",value:function(e,t){if(S()(e))return!1;var n=e.map(A.a).join("|");return new RegExp("^((?:".concat(n,")(?:").concat(t,"))"))}},{key:"tokenize",value:function(e){for(var t,n=[];e.length;)t=this.getNextToken(e,t),e=e.substring(t.value.length),n.push(t);return n}},{key:"getNextToken",value:function(e,t){return this.getWhitespaceToken(e)||this.getCommentToken(e)||this.getStringToken(e)||this.getOpenParenToken(e)||this.getCloseParenToken(e)||this.getPlaceholderToken(e)||this.getNumberToken(e)||this.getReservedWordToken(e,t)||this.getWordToken(e)||this.getOperatorToken(e)}},{key:"getWhitespaceToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:h,regex:this.WHITESPACE_REGEX})}},{key:"getCommentToken",value:function(e){return this.getLineCommentToken(e)||this.getBlockCommentToken(e)}},{key:"getLineCommentToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:k,regex:this.LINE_COMMENT_REGEX})}},{key:"getBlockCommentToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:D,regex:this.BLOCK_COMMENT_REGEX})}},{key:"getStringToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:C,regex:this.STRING_REGEX})}},{key:"getOpenParenToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:P,regex:this.OPEN_PAREN_REGEX})}},{key:"getCloseParenToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:v,regex:this.CLOSE_PAREN_REGEX})}},{key:"getPlaceholderToken",value:function(e){return this.getIdentNamedPlaceholderToken(e)||this.getStringNamedPlaceholderToken(e)||this.getIndexedPlaceholderToken(e)}},{key:"getIdentNamedPlaceholderToken",value:function(e){return this.getPlaceholderTokenWithKey({input:e,regex:this.IDENT_NAMED_PLACEHOLDER_REGEX,parseKey:function(e){return e.slice(1)}})}},{key:"getStringNamedPlaceholderToken",value:function(e){var t=this;return this.getPlaceholderTokenWithKey({input:e,regex:this.STRING_NAMED_PLACEHOLDER_REGEX,parseKey:function(e){return t.getEscapedPlaceholderKey({key:e.slice(2,-1),quoteChar:e.slice(-1)})}})}},{key:"getIndexedPlaceholderToken",value:function(e){return this.getPlaceholderTokenWithKey({input:e,regex:this.INDEXED_PLACEHOLDER_REGEX,parseKey:function(e){return e.slice(1)}})}},{key:"getPlaceholderTokenWithKey",value:function(e){var t=e.input,n=e.regex,E=e.parseKey,r=this.getTokenOnFirstMatch({input:t,regex:n,type:m});return r&&(r.key=E(r.value)),r}},{key:"getEscapedPlaceholderKey",value:function(e){var t=e.key,n=e.quoteChar;return t.replace(new RegExp(A()("\\")+n,"g"),n)}},{key:"getNumberToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:M,regex:this.NUMBER_REGEX})}},{key:"getOperatorToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:d,regex:this.OPERATOR_REGEX})}},{key:"getReservedWordToken",value:function(e,t){if(!t||!t.value||"."!==t.value)return this.getToplevelReservedToken(e)||this.getNewlineReservedToken(e)||this.getPlainReservedToken(e)}},{key:"getToplevelReservedToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:_,regex:this.RESERVED_TOPLEVEL_REGEX})}},{key:"getNewlineReservedToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:p,regex:this.RESERVED_NEWLINE_REGEX})}},{key:"getPlainReservedToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:g,regex:this.RESERVED_PLAIN_REGEX})}},{key:"getWordToken",value:function(e){return this.getTokenOnFirstMatch({input:e,type:L,regex:this.WORD_REGEX})}},{key:"getTokenOnFirstMatch",value:function(e){var t=e.input,n=e.type,E=e.regex,r=t.match(E);if(r)return{type:n,value:r[1]}}}]),e}(),f=(n(59),function e(){var t=this;Object(i.a)(this,e),this.format=function(e){return console.log("inside formatter",e),t.getFormattedSQL(e)},this.getFormattedSQL=function(e){return e.forEach((function(e,t){})),""}}),U=function(e){Object(R.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var E=arguments.length,r=new Array(E),a=0;a<E;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={inpValue:""},e.handleChange=function(){var t=document.getElementById("inputSQL").value;console.log(t),e.setState({inpValue:t})},e.handleSubmit=function(){var t=e.state.inpValue;console.log(t.length);var n=new y({reservedWords:["ACCESSIBLE","ACTION","AGAINST","AGGREGATE","ALGORITHM","ALL","ALTER","ANALYSE","ANALYZE","AS","ASC","AUTOCOMMIT","AUTO_INCREMENT","BACKUP","BEGIN","BETWEEN","BINLOG","BOTH","CASCADE","CASE","CHANGE","CHANGED","CHARACTER SET","CHARSET","CHECK","CHECKSUM","COLLATE","COLLATION","COLUMN","COLUMNS","COMMENT","COMMIT","COMMITTED","COMPRESSED","CONCURRENT","CONSTRAINT","CONTAINS","CONVERT","CREATE","CROSS","CURRENT_TIMESTAMP","DATABASE","DATABASES","DAY","DAY_HOUR","DAY_MINUTE","DAY_SECOND","DEFAULT","DEFINER","DELAYED","DELETE","DESC","DESCRIBE","DETERMINISTIC","DISTINCT","DISTINCTROW","DIV","DO","DROP","DUMPFILE","DUPLICATE","DYNAMIC","ELSE","ENCLOSED","END","ENGINE","ENGINES","ENGINE_TYPE","ESCAPE","ESCAPED","EVENTS","EXEC","EXECUTE","EXISTS","EXPLAIN","EXTENDED","FAST","FETCH","FIELDS","FILE","FIRST","FIXED","FLUSH","FOR","FORCE","FOREIGN","FULL","FULLTEXT","FUNCTION","GLOBAL","GRANT","GRANTS","GROUP_CONCAT","HEAP","HIGH_PRIORITY","HOSTS","HOUR","HOUR_MINUTE","HOUR_SECOND","IDENTIFIED","IF","IFNULL","IGNORE","IN","INDEX","INDEXES","INFILE","INSERT","INSERT_ID","INSERT_METHOD","INTERVAL","INTO","INVOKER","IS","ISOLATION","KEY","KEYS","KILL","LAST_INSERT_ID","LEADING","LEVEL","LIKE","LINEAR","LINES","LOAD","LOCAL","LOCK","LOCKS","LOGS","LOW_PRIORITY","MARIA","MASTER","MASTER_CONNECT_RETRY","MASTER_HOST","MASTER_LOG_FILE","MATCH","MAX_CONNECTIONS_PER_HOUR","MAX_QUERIES_PER_HOUR","MAX_ROWS","MAX_UPDATES_PER_HOUR","MAX_USER_CONNECTIONS","MEDIUM","MERGE","MINUTE","MINUTE_SECOND","MIN_ROWS","MODE","MODIFY","MONTH","MRG_MYISAM","MYISAM","NAMES","NATURAL","NOT","NOW()","NULL","OFFSET","ON DELETE","ON UPDATE","ON","ONLY","OPEN","OPTIMIZE","OPTION","OPTIONALLY","OUTFILE","PACK_KEYS","PAGE","PARTIAL","PARTITION","PARTITIONS","PASSWORD","PRIMARY","PRIVILEGES","PROCEDURE","PROCESS","PROCESSLIST","PURGE","QUICK","RAID0","RAID_CHUNKS","RAID_CHUNKSIZE","RAID_TYPE","RANGE","READ","READ_ONLY","READ_WRITE","REFERENCES","REGEXP","RELOAD","RENAME","REPAIR","REPEATABLE","REPLACE","REPLICATION","RESET","RESTORE","RESTRICT","RETURN","RETURNS","REVOKE","RLIKE","ROLLBACK","ROW","ROWS","ROW_FORMAT","SECOND","SECURITY","SEPARATOR","SERIALIZABLE","SESSION","SHARE","SHOW","SHUTDOWN","SLAVE","SONAME","SOUNDS","SQL","SQL_AUTO_IS_NULL","SQL_BIG_RESULT","SQL_BIG_SELECTS","SQL_BIG_TABLES","SQL_BUFFER_RESULT","SQL_CACHE","SQL_CALC_FOUND_ROWS","SQL_LOG_BIN","SQL_LOG_OFF","SQL_LOG_UPDATE","SQL_LOW_PRIORITY_UPDATES","SQL_MAX_JOIN_SIZE","SQL_NO_CACHE","SQL_QUOTE_SHOW_CREATE","SQL_SAFE_UPDATES","SQL_SELECT_LIMIT","SQL_SLAVE_SKIP_COUNTER","SQL_SMALL_RESULT","SQL_WARNINGS","START","STARTING","STATUS","STOP","STORAGE","STRAIGHT_JOIN","STRING","STRIPED","SUPER","TABLE","TABLES","TEMPORARY","TERMINATED","THEN","TO","TRAILING","TRANSACTIONAL","TRUE","TRUNCATE","TYPE","TYPES","UNCOMMITTED","UNIQUE","UNLOCK","UNSIGNED","USAGE","USE","USING","VARIABLES","VIEW","WHEN","WITH","WORK","WRITE","YEAR_MONTH"],reservedToplevelWords:["ADD","AFTER","ALTER COLUMN","ALTER TABLE","DELETE FROM","EXCEPT","FETCH FIRST","FROM","GROUP BY","GO","HAVING","INSERT INTO","INSERT","INTERSECT","LIMIT","MODIFY","ORDER BY","SELECT","SET CURRENT SCHEMA","SET SCHEMA","SET","UNION ALL","UNION","UPDATE","VALUES","WHERE"],reservedNewlineWords:["AND","CROSS APPLY","CROSS JOIN","ELSE","INNER JOIN","JOIN","LEFT JOIN","LEFT OUTER JOIN","OR","OUTER APPLY","OUTER JOIN","RIGHT JOIN","RIGHT OUTER JOIN","WHEN","XOR"],stringTypes:['""',"N''","''","``","[]"],openParens:["(","CASE"],closeParens:[")","END"],indexedPlaceholderTypes:["?"],namedPlaceholderTypes:["@",":"],lineCommentTypes:["#","--"]}).tokenize(t),E=(new f).format(n);console.log(n),document.getElementById("outputSQL").value=E},e}return Object(T.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container-fluid",id:"container"},r.a.createElement(s,{onChange:this.handleChange}),r.a.createElement(l,{onClick:this.handleSubmit}),r.a.createElement(u,null)))}}]),n}(E.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2d9d1c85.chunk.js.map
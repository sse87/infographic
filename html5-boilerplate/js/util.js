
var Utils = function Utils() {
	//var Filesystem = require('machinepack-fs');



};

/*
*	Builds a HTML element
*	--
*	ElementName - The name of the element, or what type it should be of
*				Example: "div"
*	Contents -	The contents within the element
*				Example: "<p>This is a paragraph</p>"
*	ListOfAttributes - List of attributes the element has
*				Example: [{'class', ['red', 'green-text']}, {'style', ['width:10px']}]
*	
*/
Utils.prototype.buildMarkupElement = function (elementName, contents, listOfAttributes) {

	// opening the tag
	var result = '<' + elementName + ' ';

	var attributes = '';
	if(listOfAttributes !== undefined)
	{
		// going through the attributes
		listOfAttributes.forEach(function forEachAttribute(attribute) {
			attributes += attribute.name + '="';

			// going through the attribute values
			attribute.values.forEach(function forEachValue(value) {
				attributes += value + ';';
			});

			attributes += '"';
		});
	}
	
	// adding the attributes to the result and closing the beginning tag
	result += attributes;
	result += '>';

	// adding content between the tags
	result += contents;

	// closing the tag
	result += '<' + elementName + '/>';

	return result;
};

var buttstuff = new Utils();

var attributes = [
	{name: "class", values: ["red"]},
	{ name: "style", values: ["width:200px"] },
];

var butt = buttstuff.buildMarkupElement("div", "penis", attributes);

console.log(butt);





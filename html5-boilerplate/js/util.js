
var Utils = function Utils() {
	//var Filesystem = require('../machinepack-fs');



};

var getAttributeValueSeparator = function (attribute) {

	if (attribute === 'style')
	{
		return ';';
	}
	else if (attribute === 'class')
	{
		return ' ';
	}
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

	// creating the element
	var result = $('<' + elementName + '>' + '</' + elementName + '>');
	

	if (listOfAttributes !== undefined) {
		

		// going through the attributes
		listOfAttributes.forEach(function (attribute) {

			var attributeValue = '';

			// getting the attribute value separator
			var separator = getAttributeValueSeparator(attribute.name);

			// concatenating the attribute values
			attribute.values.forEach(function (value) {
				attributeValue += value + separator;
			});


			// adding the attribute value
			result.attr(attribute.name, attributeValue);
		});
	}

	// adding the contents
	result.text(contents);

	return result;
};

var buttstuff = new Utils();





var attributes = [
	{name: "class", values: ["red"]},
	{ name: "style", values: ["width:200px"] },
];

var butt = buttstuff.buildMarkupElement("div", "penis", attributes);


//$('.main-content').append(butt);


console.log(butt);





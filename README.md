# readingTime.js
Script showing the reading time of the articles to the user (showing them as seconds, minutes, hours, days)

**[View the Demo on CodePen &rarr;]()**

## Getting Started

Compiled and production-ready code can be found in the `dist` directory.

### 1. Include readingTime.js on your site.

**Direct Download**

You can [download the files directly from GitHub]().

```html
<script src="dist/readingTime.min.js"></script>
```

**CDN**

You can also use the [jsDelivr CDN](https://cdn.jsdelivr.net/gh/cferdinandi/bouncer/dist/). I recommend linking to a specific version number or version range to prevent major updates from breaking your site.

```html
<!-- Get a specific version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/bouncer@1.0.0/dist/bouncer.polyfills.min.js"></script>
```

**NPM**

You can also use NPM (or your favorite package manager).

```bash
npm install reading-time
```


### 2. Initialize reading-time.js.

```html
<script>
	var validate = new Bouncer('form');
</script>
```

### Options and Settings

```js
var validate = new Bouncer('form', {

	// Classes & IDs
	fieldClass: 'error', // Applied to fields with errors
	errorClass: 'error-message', // Applied to the error message for invalid fields
	fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
	errorPrefix: 'bouncer-error_', // Prefix used for error message IDs

	// Patterns
	// Validation patterns for specific input types
	patterns: {
		email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
		url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
		number: /[-+]?[0-9]*[.,]?[0-9]+/,
		color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
		date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
		time: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])/,
		month: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2]))/
	},

	// Message Settings
	messageAfterField: true, // If true, displays error message below field. If false, displays it above.
	messageCustom: 'data-bouncer-message', // The data attribute to use for customer error messages
	messageTarget: 'data-bouncer-target', // The data attribute to pass in a custom selector for the field error location

	// Error messages by error type
	messages: {
		missingValue: {
			checkbox: 'This field is required.',
			radio: 'Please select a value.',
			select: 'Please select a value.',
			'select-multiple': 'Please select at least one value.',
			default: 'Please fill out this field.'
		},
		patternMismatch: {
			email: 'Please enter a valid email address.',
			url: 'Please enter a URL.',
			number: 'Please enter a number',
			color: 'Please match the following format: #rrggbb',
			date: 'Please use the YYYY-MM-DD format',
			time: 'Please use the 24-hour time format. Ex. 23:00',
			month: 'Please use the YYYY-MM format',
			default: 'Please match the requested format.'
		},
		outOfRange: {
			over: 'Please select a value that is no more than {max}.',
			under: 'Please select a value that is no less than {min}.'
		},
		wrongLength: {
			over: 'Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.',
			under: 'Please lengthen this text to {minLength} characters or more. You are currently using {length} characters.'
		}
	},

	// Form Submission
	disableSubmit: false, // If true, native form submission is suppressed even when form validates

	// Custom Events
	emitEvents: true // If true, emits custom events

});
```

## License

The code is available under the [MIT License](https://github.com/Ahmetaksungur/reading-time/blob/master/LICENSE).

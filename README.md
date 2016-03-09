# Empty Gender Value fix for Pivot Tables
This will take the empty gender values in pivot tables and replace them with 'N/A'
### Instructions
1. Navigate to `X:\Program Files\Sisense\PrismWeb\plugins\`
1. Create a new folder named `pivotFix` and paste the files in this directory into the new folder.
1. In your SiSense dashboard, navigate to the particular widget you'd like to run the code on
1. Inside the widget view, click on the hamburger menu, then click *Edit Script*.
1. Copy and paste the following code

```javascript
widget.on('initialized', function() {
	pivotFix(widget);
});
```

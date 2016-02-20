# DropdownsBootstrap3

```js
meteor add ivansglazunov:dropdowns-bootstrap-3
```

The wrapper lookback:dropdowns package for bootstrap 3.

## Documentation

You can use the `dropdownBootstrap` template exactly the same as the original template `dropdown` in [https://github.com/lookback/meteor-dropdowns](lookback:dropdowns) package.

```js
{{#dropdownTrigger name="uniqueName" }}
    <button>button</button>
{{/dropdownTrigger}}
{{#dropdownBootstrap name="uniqueName" direction="s" align="left"}}
    content
{{/dropdownBootstrap}}
```

## Versions

### 0.0.1
* popover-dropdown max-width fix (need limiter-div inside)
# toy-face

<p align="center">
<img width="648" src="https://user-images.githubusercontent.com/58827166/183727670-e5909d83-0e15-431c-af05-d626ab1a8492.png">
</p>

## Demo (VueJs)

[Demo](https://vue-toy-face.vercel.app/)

## Installation

```shell
# npm
$ npm install toy-face
# yarn
$ yarn add toy-face
```

## Usage

```html
<script src="https://cdn.jsdelivr.net/gh/imanmalekian31/toy-face/dist/bundle.js"></script>
OR
<script src="node_modules/toy-face/dist/bundle.js"></script>
...
<toy-face size="180" rounded="20" toy-number="18" group="2"></toy-face>
```

## Constructor Options

| Key          | Type   | Description                                 | Default |
| :----------- | ------ | ------------------------------------------- | :-----: |
| `size`       | String | Width and height of avatar (per pixel)      |  `48`   |
| `rounded`    | String | Border radius of avatar (per pixel)         |   `0`   |
| `toy-number` | String | The Number of each avatar (between 1 to 18) |   `1`   |
| `group`      | String | Avatars are defined in each group ( 1 or 2) |   `1`   |

# License

[The MIT License](http://opensource.org/licenses/MIT)

## PageSvg SVG 作品页

### 基本有法

:::demo

```html
<el-row>
  <el-col :span="12">
    <fc-page-svg :page="frame1.page" :scale="0.04"></fc-page-svg>
  </el-col>
  <el-col :span="12">
    <fc-page-svg :page="page" :scale="0.04" :frame="frame"></fc-page-svg>
  </el-col>
  <el-col :span="12">
    <fc-page-svg
      :page="album"
      :scale="0.04"
      :frame="frame"
      @select-layout="test"
    ></fc-page-svg>
  </el-col>
</el-row>
<script>
  export default {
    methods: {
      test(index) {
        console.log(123, index);
      }
    },
    data() {
      return {
        album: {
          id: '0-366_护封',
          name: '护封',
          layers: [
            {
              fill: false
            },
            {
              fill: false
            }
          ],
          width: 8835,
          height: 2421,
          isPart: true,
          partId: 528,
          bleed: [3, 3, 3, 3]
        },
        frame: {
          productSize: {
            width: 4724,
            height: 2362
          },
          border: [],
          bleed: [3, 3, 3, 3]
        },
        page: {
          id: '0-366_护封',
          name: '护封',
          isFixed: false,
          layers: [
            {
              fill: true
            }
          ],
          width: 8835,
          height: 2421,
          isPart: true,
          partId: 528,
          paper: {
            attribute_value_name: '木棉纯白艺术纸',
            attribute_value_id: 990
          },
          bleed: [3, 3, 3, 3],
          ridgeWidth: 29.5
        },
        frame1: {
          page: {
            id: '90707_0_y',
            width: 6000,
            height: 7193,
            layers: [
              {
                id: '4_6000*7193_6',
                fill: true,
                size: '270*120mm',
                layer: [
                  {
                    x: 1642,
                    y: 408,
                    id: '4_6000*7193_6_4',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1,
                    data: {
                      scale: 1,
                      naturalH: 1514,
                      naturalW: 2362,
                      rotate: 0,
                      photoUrl: 'phosee/61842/5e801de93a3e4dfd8_3.jpg',
                      photoId: '5e801de93a3e4dfd8',
                      shape: 0,
                      isUpload: true,
                      fileName: '3.jpg',
                      result:
                        'http://fcwz-paiban.phosee.cn/phosee/61842/5e801de93a3e4dfd8_3.jpg?imageView2/2/w/800/h/800',
                      date: '2020/11/08 15:32:59',
                      isQiniu: true,
                      x: 0,
                      y: 313.5461473327689,
                      width: 3189,
                      height: 2044.0922946655378,
                      initialW: 3189,
                      initialH: 2044.0922946655378,
                      invalid: false
                    }
                  },
                  {
                    x: 1170,
                    y: 2062,
                    id: '4_6000*7193_6_3',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1
                  },
                  {
                    x: 1642,
                    y: 3715,
                    id: '4_6000*7193_6_2',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1
                  },
                  {
                    x: 1170,
                    y: 5369,
                    id: '4_6000*7193_6_1',
                    type: 'photo',
                    width: 3189,
                    height: 1417,
                    zIndex: 1
                  }
                ],
                output: 'more'
              }
            ]
          },
          frame: {
            bleed: [140, 140, 140, 140],
            border: [40, 40, 40, 40],
            output: 'more'
          }
        }
      };
    }
  };
</script>
```

:::

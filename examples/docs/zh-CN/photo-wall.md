<!--
 * @Author: your name
 * @Date: 2021-06-28 10:33:16
 * @LastEditTime: 2021-08-04 17:20:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/examples/docs/zh-CN/photo-wall.md
-->

## PageWall 照片墙

### 基本有法

:::demo

```html
<el-row>
  <el-col>
    <!-- :view="true" -->
    <fc-photo-wall
      :pageList="pageList"
      defaultId="0-359_0"
      :scale="0.1"
      :frame="frame"
      @click="test"
    ></fc-photo-wall>
  </el-col>
</el-row>
<script>
  export default {
    methods: {
      test(i) {
        console.log(i);
      }
    },
    mounted() {
      document.addEventListener('click', function(e) {
        console.log('mounted -> e', e.target);
      });
    },
    data() {
      return {
        frame: {
          productSize: {
            width: 13838,
            height: 11830
          },
          bleed: [15, 15, 15, 15],
          border: [],
          type: 'photo_wall'
        },
        page_info: {
          id: '0-359',
          pagesObj: {
            '0-359_0': {
              id: '0-359_0',
              layers: [
                {
                  id: '1_3001*3001_1',
                  fill: true,
                  output: 'more',
                  size: '150x200mm',
                  layer: [
                    {
                      x: 614,
                      y: 319,
                      width: 1773,
                      height: 2363,
                      zIndex: 1,
                      type: 'photo',
                      id: '1_3001*3001_1_1'
                    }
                  ],
                  width: 3001,
                  height: 3001
                }
              ],
              width: 3001,
              height: 3001,
              x: 1884,
              y: 6220,
              bleed: [3, 3, 3, 3],
              temId: '608-434-655-990'
            },
            '0-359_1': {
              id: '0-359_1',
              layers: [
                {
                  id: '1_3001*3603_1',
                  fill: true,
                  output: 'more',
                  size: '160x235mm',
                  layer: [
                    {
                      x: 555,
                      y: 413,
                      width: 1891,
                      height: 2777,
                      zIndex: 1,
                      type: 'photo',
                      id: '1_3001*3603_1_1'
                    }
                  ]
                }
              ],
              width: 3001,
              height: 3603,
              x: 1885,
              y: 2217,
              bleed: [3, 3, 3, 3],
              temId: '608-414-657-990'
            },
            '0-359_2': {
              id: '0-359_2',
              layers: [
                {
                  id: '1_3001*3001_1',
                  fill: true,
                  output: 'more',
                  size: '150x200mm',
                  layer: [
                    {
                      x: 614,
                      y: 319,
                      width: 1773,
                      height: 2363,
                      zIndex: 1,
                      type: 'photo',
                      id: '1_3001*3001_1_1'
                    }
                  ],
                  width: 3001,
                  height: 3001
                }
              ],
              width: 3001,
              height: 3001,
              x: 5284,
              y: 1334,
              bleed: [3, 3, 3, 3],
              temId: '608-434-658-991'
            },
            '0-359_3': {
              id: '0-359_3',
              layers: [
                {
                  id: '1_6001*7194_3',
                  fill: true,
                  output: 'more',
                  size: ' 390x460mm',
                  layer: [
                    {
                      x: 697,
                      y: 880,
                      width: 4607,
                      height: 5434,
                      style: 'ellipse',
                      zIndex: 1,
                      type: 'photo',
                      id: '1_6001*7194_1_1',
                      data: {
                        scale: 1,
                        naturalH: '4480',
                        naturalW: '6720',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/3cd56100c9fe4fad8__82A9955.jpg',
                        photoId: '3cd56100c9fe4fad8',
                        shape: 0,
                        fileName: '_82A9955.jpg',
                        result:
                          'http://fcwz-paiban.phosee.cn//phosee/undefined/3cd56100c9fe4fad8__82A9955.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '0',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 1772.0000000000005,
                        y: 0,
                        width: 8151.000000000001,
                        height: 5434,
                        initialW: 8151.000000000001,
                        initialH: 5434,
                        invalid: false
                      }
                    }
                  ],
                  width: 6001,
                  height: 7194
                }
              ],
              width: 6001,
              height: 7194,
              x: 5284,
              y: 4735,
              bleed: [3, 3, 3, 3],
              temId: '608-418-657-1311'
            }
          },
          pagesIds: ['0-359_0', '0-359_1', '0-359_2', '0-359_3'],
          count: 0,
          addCount: 0,
          start: 0,
          productSize: {
            width: 13838,
            height: 11830
          }
        }
      };
    },
    computed: {
      pageList() {
        const { pagesIds, pagesObj } = this.page_info;
        return pagesIds.map(id => pagesObj[id]);
      }
    }
  };
</script>
```

:::

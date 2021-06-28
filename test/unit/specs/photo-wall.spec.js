import { createTest, destroyVM } from '../util';
import PhotoWall from 'packages/photo-wall';

describe('PhotoWall', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PhotoWall, true);
    expect(vm.$el).to.exist;
  });
});


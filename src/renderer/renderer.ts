
import { Triangle } from './shapes'

class Scene {
    triangles: Triangle | null;

    constructor() {
        this.triangles = null;
    }
}

class Renderer {
    scene: Scene | null;

    constructor() {
        this.scene = null;
    }

    render() {
        console.log(this.scene);
    }
}

export { Renderer }

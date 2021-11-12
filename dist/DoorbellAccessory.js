"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoorbellAccessory = void 0;
const Accessory_1 = require("./Accessory");
const DoorbellStreamingDelegate_1 = require("./DoorbellStreamingDelegate");
class DoorbellAccessory extends Accessory_1.Accessory {
    constructor(api, log, platform, accessory, device) {
        super(api, log, platform, accessory, device);
        this.accessory.on("identify" /* IDENTIFY */, () => {
            log.info("%s identified!", this.accessory.displayName);
        });
        this.streamingDelegate = new DoorbellStreamingDelegate_1.DoorbellStreamingDelegate(log, api, this.platform.config.options, this.device);
        this.accessory.configureController(this.streamingDelegate.getController());
        this.device.onRing = this.handleRing.bind(this);
    }
    handleRing() {
        this.log.debug('Doorbell ring!');
        this.streamingDelegate.getController().ringDoorbell();
    }
}
exports.DoorbellAccessory = DoorbellAccessory;
//# sourceMappingURL=DoorbellAccessory.js.map
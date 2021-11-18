import {
    PlatformAccessory,
    PlatformAccessoryEvent,
    Logger, API
} from 'homebridge';
import {Platform} from './Platform';
import {Config} from "./Config";
import {Camera} from "./sdm/Camera";
import {Accessory} from "./Accessory";
import {CameraStreamingDelegate} from "./CameraStreamingDelegate";

export class CameraAccessory extends Accessory<Camera>{
    constructor(
        api: API,
        log: Logger,
        platform: Platform,
        accessory: PlatformAccessory,
        device: Camera) {
        super(api, log, platform, accessory, device);

        this.accessory.on(PlatformAccessoryEvent.IDENTIFY, () => {
            this.log.info("%s identified!", this.accessory.displayName);
        });
api.hap.HAPServer
        const streamingDelegate = new CameraStreamingDelegate(log, api, this.platform.config as unknown as Config, this.device);
        this.accessory.configureController(streamingDelegate.getController());
    }
}

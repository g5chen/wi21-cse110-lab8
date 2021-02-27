const formatVolumeIconPath = require("../assets/scripts/main");
describe('testing the Volumn Icon', ()=>{
    test('1 <= volumn <= 33', ()=>{
        for(var vol = 1; vol <= 33; ++vol){
            expect(formatVolumeIconPath(30)).toMatch('./assets/media/icons/volume-level-1.svg');
        }
    });
    test('34 <= volumn <= 66', ()=>{
        for(var vol = 34; vol <= 66; ++vol){
            expect(formatVolumeIconPath(60)).toBe('./assets/media/icons/volume-level-2.svg');
        }
    });
    test('67 <= volumn <= 100', ()=>{
        for(var vol = 67; vol <= 100; ++vol){
            expect(formatVolumeIconPath(100)).toBe('./assets/media/icons/volume-level-3.svg');
        }
    });
    test('none of the above', ()=>{
        expect(formatVolumeIconPath(0)).toContain('./assets/media/icons/volume-level-0.svg');
    });
});
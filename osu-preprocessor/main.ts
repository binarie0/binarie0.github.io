import { StoryboardDecoder } from "osu-parsers";

const decoder = new StoryboardDecoder();

decoder.decodeFromPath('static/osumaps/2475368 BlackY - PANAGIA/BlackY - PANAGIA (yf_bmp) [Effulgence].osu', 'static/osumaps/2475368 BlackY - PANAGIA/BlackY - PANAGIA (yf_bmp).osb')
.then((sb) =>
{
    console.log();
})

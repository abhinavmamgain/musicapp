// To parse this data:
//
//   import { Convert, ArtistsInfo } from "./file";
//
//   const artistsInfo = Convert.toArtistsInfo(json);

export class ArtistsInfo {
    artists?: Artists;
}

export class Artists {
    artist?:  Artist[];
    "@attr"?: Attr;
}

export class Attr {
    page?:       string;
    perPage?:    string;
    user?:       string;
    total?:      string;
    totalPages?: string;
}

export class Artist {
    url?:        string;
    mbid?:       string;
    tagcount?:   string;
    playcount?:  string;
    streamable?: string;
    name?:       string;
    image?:      Image[];
}

export class Image {
    size?:    Size;
    "#text"?: string;
}
export enum Size {
    Extralarge = "extralarge",
    Large = "large",
    Medium = "medium",
    Mega = "mega",
    Small = "small",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toArtistsInfo(json): ArtistsInfo {
        return json;
    }

    public static artistsInfoToJson(value: ArtistsInfo): string {
        return JSON.stringify(value);
    }
}
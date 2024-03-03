import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {ThemeSwitcher} from "../ThemeSwitcherContainer/ThemeSwitcher";

const Header = () => {
    return (
        <div className={css.Header}>
            <h1>Imovie</h1>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <ThemeSwitcher/>
            <div className={css.user}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSElEQVR4nO1ZS3MUVRTOf+rumel5P3pIMj0DShaaCCSoMeRRQEWNpZCEyBASNXGBulAjIKmESUISLYW9K0tZsJGUPAZ8hbL8Ecf6ThhI39vPmTGDVSxOVU/3veee79zznjZFUej/TG2tFkB5DkBpvRaVlpuQqpH+wmFKn/yQjNkN6li4SWalSsXNR0x47ly4yd+wRj9wiFRVaz2AUKaDMu98SoXFLSp9+08gMhe3KDP2CWmZ9r0HoCWzlJ28TMWN7cCCi1Tc2KbcxCXSEpm9ARDve4uKlWrDgks3UrlP8SOj/x0AVQtT7swVZ02u/kbG9Col+k9RpNTNt4Q9IDzjXaL/NBnn16i49rsjn9zkZd7TVABqJEr75m/YHli4eIsSr73La3wrIxKlxOvvUefFW7Y8981d983PEwC0YSd8cf0vSo1Mk6KF6nZAVQtT6vgMldZlX8rPfe/rJjwB2JkNNBfu7HLVcKx7mJIj5yg5XOZnN43qBw5RYelX2ZwmLjUGIH70bYlpx+c/sk3b7lFVvhVz5YHspCsPGAzW2O3VMu3U8cVP0r5472h9ACCkGG2geTfhjXLFM9rkylddQZhLd6zAr94nLZ4JDgBxXrR5N7OB5v2GzBRuwsWcioJPZMe/CgYAGVZMUuywLjYvmg1+Qwkgc/WhEPOrpIZ1R37p0XlBeduOGdsWAMoDMVS6RZtYz7AkfChXeKoQw5RAxF4edOSn6XHJlFB2+AOgalJtgzjv5kii+SAZySb5tWUNIpTiwjM5MGlV4uJt2wJQAoCqUsywXklFBJBtAgBVj5EpZOzI/h5vACh3d29CeeB2kKMJGeaT72GjGMiElMdkTK9Z/fDEB94AULNbzKf/lOdBtk68+pC1DhKFL3o4sVIzozfGrdl5ZsMbABoPy7WVuj0P4sOGy77DaHLofV889f2vWJPolz97AxCTl+86XVU5SXkJb5xddkxkikChZE5Kat4AhPivhiL+ADwGgSSFOC8KDsWw5n0Kr8A0wxEpHwQH4MNW5YN1inUPsVntFHND9fGJROsAIJpQgz1rIxTKdgY3IdGJ4UitAqALOcmXE+dnN60RY3CqZQBSQmTzFUbTJ4RENrPufVg4QtGuVzkjG+dWuGfA2AQVLAjPeIdyGxlY7zrKexQPvqIyU8dnvQGgnLU4zrU/SYsmbSNErGeEhXJr0l2HAOXKTrdmE+m0WIrBe+UkCQAKJmjMko0HJp6uUTVKHpuqa5jlRObiFiWPnWHetXPwe/eawpVf/BVzIJSu0uawziVy+2c/NE3wkkDgjRoKZ4lKTI9dsDUzWwAInWI+MM5fs01QTOvbPLlAsRV9aYDC+RJp8fROD6GF+Bnv8A0+lp+/IXVdpdptVKrsd2L8DwVpaECYCPi7+im216ARBnuSg1OSpu0oO75QR1OfyPC4z9YB1/6g1NBZduRGQ6UajnC4BE9bJS3fIxW3GRQACLNKSfhv/ib9YF/DgkvR72Af8xbPix8+2eBgS5hOsFaW7pD+4pEmCt9L5vJd2XROO5tOsNHi3HX5JjYf8fQADXi9gmt6nNJvfsy8RP75j77zNbb0P9y1AbFjo3fZGdHD+rZ7PcZ7CjZarwnftOHu7ptwi0xowBFqkfRQAKIZQYYF4Rnv8A1rnBy2VDObAAPj4H9w9I5yWdvsJGYu3/N02KYAYNuNZ3jc55SMglBxfZvjvFuobDqAGiE7ouzA0Cmo4NiTHrvgmGH3BMAT/1A1HjqhlEDNjsYDnR3KEaZKlUfn+IaSGFXlM/E3q/IMUFurBVCeA1Bar8VGTOhfl6zICbrTQxYAAAAASUVORK5CYII="
                    alt={'user'}/>
                <h5>Denys_S</h5>
            </div>
        </div>
    );
};

export {Header};
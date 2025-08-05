---
title: "Conoce http-sentinel: simplifica el control de errores sin complicaciones"
pubDate: "Aug 3 2025"
tags: ["npm", "error-handling", "ts"]
description: "Una guía práctica de HTTP Sentinel, la librería TypeScript que unifica el manejo de errores HTTP: descubre su motivación, características clave, instalación rápida e integración con Fetch, Axios y TanStack Query en React. Simplifica tu código, mejora la consistencia y ahorra tiempo de desarrollo."
---

# Conoce http-sentinel: simplifica el control de errores sin complicaciones

*💥Una biblioteca de TypeScript que proporciona un conjunto completo de clases de error HTTP y utilidades para manejar errores HTTP en sus aplicaciones.*

## 1. Motivación y contexto

¿Te ha pasado que, en cada proyecto donde haces peticiones a una API, terminas repitiendo una y otra vez la misma lógica para capturar y procesar errores HTTP? A mí me pasaba constantemente: en un repositorio usaba un bloque **try/catch** , en otro un manejador diferente, y al final dedicaba más tiempo a reinventar la rueda que a desarrollar la funcionalidad real. 

En muchas aplicaciones, el manejo de errores HTTP se sustituye por mensajes genéricos como “Algo salió mal” o “Imposible acceder”, que ofrecen cero feedback al usuario final. Además, durante el desarrollo o la implementación de nuevas funcionalidades, esta omisión genera dificultades para depurar e incrementar la deuda técnica.

Como resultado el manejo de errores HTTP queda casi enteramente en manos de cada desarrollador: unos escriben bloques try/catch genéricos, otros crean soluciones puntuales o, en el peor de los casos, lo pasan por alto y muestran mensajes vagos como *“Algo salió mal”*. Esta incoherencia encarece el mantenimiento, dificulta la documentación y penaliza tanto la experiencia del usuario final como la capacidad de depurar e implementar nuevas funcionalidades.

Por ello creé **HTTP Sentinel**, una librería en TypeScript que reúne clases de error y utilidades para gestionar de manera uniforme cualquier fallo HTTP. Gracias a ella, ya no tendrás que duplicar código ni enfrentarte a soluciones dispares: basta con importarla, lanzar o capturar la excepción correspondiente, y tu aplicación se encargará de todos los errores de forma coherente y eficiente.


## 2. Principales características de HTTP Sentinel

HTTP Sentinel agrupa todo lo que necesitas para tratar errores HTTP de forma consistente y productiva:

* **Cobertura completa de códigos de estado**:
  Clases predefinidas para todos los errores 4xx y 5xx conocidos (por ejemplo, *BadRequestError*, *UnauthorizedError*, *InternalServerError*, etc.), para que no tengas que crearlas tú mismo.

* **Mensajes de error personalizables**:
  Cada clase acepta un mensaje descriptivo, de modo que puedas enriquecer la respuesta y facilitar el debug.

* **Utilidades de detección y filtrado**:
  Funciones como *resolveHttpError(status)*, *matches(error)*, *compare(error, BadRequestErro)* te permiten:

  1. Lanzar un error basado en el *status* de la petición.
  2. Saber si un error proviene de HTTP Sentinel.
  3. Identificar rápidamente el tipo de error asociado

* **Soporte nativo para TypeScript**:
  Definiciones de tipos incluidas (*.d.ts*), para que disfrutes de autocompletado y validación en tiempo de compilación sin configuración extra.


* **Extensible y lista para integrar**:
  HTTP Sentinel está diseñada para funcionar en cualquier entorno JavaScript/TypeScript sin depender de un framework o librería concreta. Esto significa que puedes integrarla de forma sencilla con:

  * **Funciones nativas de JavaScript** (Fetch API)
  * **Bibliotecas populares** como Axios
  * **Soluciones de fetching modernas** como TanStack Query

Con HTTP Sentinel no solo tendrás todas las clases de error y utilidades en un único paquete, sino también una API clara y tipada que facilita el manejo uniforme de fallos en cualquier proyecto.


## 3. Instalación rápida

HTTP Sentinel no requiere **ninguna** configuración inicial: basta con instalarlo e importarlo en tu proyecto, lo que hace que su integración sea realmente sencilla.


```bash
// Usas tu gestor de paquetes favorito 🔥

npm i http-sentinel
pnpm i http-sentinel
yarn add http-sentinel
```

Después de la instalación, ya estás listo para empezar a usar HTTP Sentinel. Solo importa el namespace stn directamente desde el paquete:

```ts
import { stn } from "http-sentinel"
```

Aquí stn agrupa todas las funcionalidades de la librería: desde las clases de error hasta las utilidades. Así mantienes tu código organizado y claro.


## 4. Primeros pasos: detectando y lanzado error

En esta sección, de manera introductoria, exploraremos cómo capturar e identificar los errores generados por una petición HTTP fallida utilizando la librería **http-sentinel**.


#### Ejemplo de petición y manejo de errores

Imagina que estás haciendo una solicitud a una API y esta devuelve un error. A continuación, se muestra un ejemplo básico de cómo capturarlo y gestionarlo con la librería **http-sentinel**:

```ts
import { stn } from "http-sentinel"

try {
  const response = await fetch("http://endpoint.com/example");
  const data = await response.json();

  if (!response.ok) {
    // Lanza un error basado en el código de estado HTTP
    stn.tools.resolveHttpError(response.status);
  }
} catch (err) {
  // Verifica si el error proviene de http-sentinel
  if (stn.tools.matches(err)) {
    // Compara el error con una colección predefinida
    if (stn.compare(err, stn.collections.BadRequest)) {
      // Maneja específicamente el error 400 Bad Request
    }

    // Aquí puedes agregar más condiciones para manejar otros tipos de errores esperados
  }
}
```

Al gestionar los errores HTTP con **http-sentinel**, obtienes varias ventajas clave: evitas la duplicación de lógica al centralizar la creación y el reconocimiento de excepciones; garantizas un comportamiento uniforme en toda tu aplicación; facilitas la lectura y el mantenimiento del código, ya que cada fallo se describe y relaciona con una colección predefinida; y, por último, mejoras la capacidad de prueba, puesto que puedes simular y comprobar respuestas erróneas de forma controlada.

Tenga en cuenta que el ejemplo anterior es solo un uso básico; más adelante veremos cómo implementarlo adecuadamente en sus aplicaciones.

## 5. Integración con React: uso conjunto de Axios, TanStack Query y HTTP Sentinel

Dado que HTTP Sentinel es completamente independiente de cualquier framework o librería, se integra de manera sencilla con cualquier herramienta que uses para desarrollar tu aplicación. En esta sección abordaremos cómo integrarla con axios, tanstack query y react mediante un caso real

```ts
import axios, { isAxiosError } from "axios";
import { stn, type HttpStatusCode, type ExpectedError } from "http-sentinel";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export interface TokenPayload {
    sub:string | null;
    user_id:number | null;
    is_active:number | null;
    role:string | null
}


export interface ILoginForm {
    email:string;
    password:string;
}

export interface Token {
    access_token:string;
}

export const useLogin = () => {
    const setAccesToken = useAuth(state => state.setAccesToken);
    const setDecoded = useAuth(state => state.setDecoded)
    const goTo = useNavigate();

    const mutationFn = async(data:ILoginForm):Promise<Token> => {

        try{
            const endpoint = import.meta.env.VITE_API_LOGIN as string;
            const response = await axios.post<Token>(endpoint,data, {
                withCredentials:true,
                skipAuthRefresh: true
            });

            return response.data

        }
        catch (error:unknown){
            if(isAxiosError(error)){
                // Obtenemos el status code
                const status = error.response?.status as HttpStatusCode
                // Lanzamos un error en basado en el status code
                if(status){ stn.tools.resolveHttpError(status) }
            }

            throw new Error("Error desconocido")
        }
    }

    // Note que puede tipar el error esperado
    return useMutation<Token, ExpectedError,ILoginForm>({
        mutationFn: mutationFn, 
        onSuccess: (data:Token) => { 
            if(data.access_token) {
                setAccesToken(data.access_token);
                setDecoded(jwtDecode<TokenPayload>(data.access_token));
                goTo("/informacion");
            }
        }
    })

}

```

Tenga en cuenta que no es necesario usar exclusivamente *stn.tools.resolveHttpError(status)* para lanzar errores: la librería incluye atajos específicos que aceptan un mensaje opcional. Si no lo proporciona, se mostrará uno por defecto. Por ejemplo:

```ts
// Lanza un 400 Bad Request
stn.throw.BadRequest('Mensaje de error personalizado');  // ✅
stn.throw.BadRequest();                                 // ✅

// Lanza un error desconocido
stn.throw.UnknownError('Mi error desconocido');         // ✅
stn.throw.UnknownError();                               // ✅

// Evite usar `throw new`, ya que la librería gestiona internamente la creación de la excepción
throw new stn.throw.UnknownError('Mi error desconocido'); // ❌
throw stn.throw.UnknownError();                           // ❌

```

En tu componente de React:

```ts
import { stn, type ExpectedError } from "http-sentinel";

export const LoginForm:React.FC = () => {

    const {mutate,status,error} = useLogin();
    const [formState, setFormState] = useState<ILoginForm>({email: '', password: ''});
    const [showPassword, setShowPassword] = useState(false);

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({...formState, [name]: value})
    } 

    const handleEye = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if(formState.email.length > 0 && formState.password.length > 0 ){
            mutate(formState)
        }
    }

    const handleError = (error: ExpectedError | Error) => {


        if(stn.tools.matches(error)){
            if(stn.tools.compare(error, stn.collections.Unauthorized)) return "Credenciales incorrectas"
            if(stn.tools.compare(error, stn.collections.TooManyRequests)) return "Demasiados intentos"
            //otras comprobaciones

            // Note que puede acceder a error.message, error.status_code. En este caso preferí hacerlo de esta
            // forma para tener un mensaje custom usando stn.tools.resolveHttpError(status)
        }

        return "Error desconocido";

    }

    // Ahora nuestro botón tendrá un texto dieferente segun el estado de la petición y si se produce un error
    // muestra un mensaje personalizado

    return (
      <div>
        <button>
        {
          status === "idle" ? "Iniciar":
          status === "pending" ? <FaSpinner className="text-white animate-spin text-2xl" />:
          status === "error" ? handleError(error) : "Correcto"
        }
        <button/>
      </div>
    )

```

Si prefieres interceptar la respuesta en tu hook o función de fetch/axios y escribir un mensaje personalizado, podrías hacer esto:

```ts
if(isAxiosError(error)){
  // Obtenemos el status code
  const status = error.response?.status as HttpStatusCode
  // Lanzamos un error en basado en el status code
  if(status === 400){ stn.throw.BadRequest("tu mensaje personalizado") }
  else if(status === ....) { ... }
}
```


En el componente mantendrías la lógica de renderizado igual, mostrando error.message cuando status === "error". De esta forma, todo el mapeo de códigos HTTP a excepciones lo haces en un solo lugar, y el componente solo muestra el mensaje resultante.


```ts

 return (
      <div>
        <button>
        {
          status === "idle" ? "Iniciar":
          status === "pending" ? <FaSpinner className="text-white animate-spin text-2xl" />:
          status === "error" ? error.message : "Correcto"
        }
        <button/>
      </div>
    )

```

Y así, combinando React, TanStack Query y Axios con HTTP Sentinel obtenemos un flujo de trabajo robusto y coherente para todas nuestras peticiones: centralizamos el mapeo de códigos HTTP a excepciones, unificamos la detección y el tratamiento de errores, y mantenemos el componente enfocado solo en la presentación y la navegación. El resultado es un código más limpio, fácil de mantener y probar, con mensajes de error claros y consistentes y una experiencia de usuario mucho más fiable.

---
Espero que este artículo les resulte interesante y les sea de gran utilidad en sus futuros proyectos. Pueden consultar el repositorio oficial de **HTTP Sentinel** en GitHub:

🚀[https://github.com/JorgeRosbel/http-sentinel](https://github.com/JorgeRosbel/http-sentinel)

Se agradece cualquier comentario o contribución. No duden en darle ⭐ al repositorio si les ha resultado útil o ha facilitado su proceso de desarrollo.


Muchas gracias por llegar hasta aquí


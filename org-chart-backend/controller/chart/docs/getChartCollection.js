/**
 * @swagger
 * /chart/collection/type/{type}:
 *  get:
 *    tags:
 *    - "chart"
 *    description: Get registered user list
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: type
 *      in: path
 *      required: true,
 *      description: "Category type"
 *    responses:
 *      '200':
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            data:
 *              type: object
 *              properties:
 *                collectionId:
 *                   type: string
 *                collection:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    title:
 *                      type: string
 *                    relationship:
 *                      type: string
 *                    children:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          id:
 *                            type: string
 *                          name:
 *                            type: string
 *                          title:
 *                            type: string
 *                          relationship:
 *                            type: string
 *                          children:
 *                            type: array
 *                            items:
 *                              type: object
 *      '400':
 *        description: Bad Request
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *      '401':
 *        description: Unauthorized
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *      '500':
 *        description: Server Error
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 */

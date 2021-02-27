/**
 * @swagger
 * /chart/collection:
 *  patch:
 *    tags:
 *    - "chart"
 *    description: Get registered user list
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: body
 *      in: body
 *      description: "Update collection"
 *      schema:
 *        type: object
 *        properties:
 *          collectionId:
 *            type: string
 *          type:
 *            type: string
 *          collection:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              name:
 *                type: string
 *              title:
 *                type: string
 *              relationship:
 *                type: string
 *              children:
 *                type: array
 *                items:
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
 *        required:
 *        - collectionId
 *        - type
 *        - collection
 *        example:
 *          collectionId: "6039ef38422015cf07d99771"
 *          type: "roles"
 *          collection: {
 *              id: 'string',
 *              name: 'string',
 *              title: 'string',
 *              relationship: 'string',
 *              children: 'array'
 *          }
 *    responses:
 *      '200':
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            data:
 *              type: object
 *              properties:
 *                users:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      firstName:
 *                        type: string
 *                      lastName:
 *                        type: string
 *                      avatar:
 *                        type: string
 *                      createdAt:
 *                        type: string
 *                      updatedAt:
 *                        type: string
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
